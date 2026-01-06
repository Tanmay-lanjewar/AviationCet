import "./payment.css";
import React, { useState, useEffect } from "react";
function Payment_page({ formData, handlepaymentcomplete,loading,setLoading }) {
  const [amount, setamount] = useState(1200);
  const [payment_complete, setpayment_complete] = useState("false");
  
  function findamount() {
    console.log(formData.gender, formData.category);
    if (formData.gender == "Male") {
      if (formData.category == "General" || formData.category == "OBC") {
        setamount(1200);
      } else {
        setamount(1000);
      }
    } else if (formData.gender == "Female") {
      setamount(1000);
    }
  //  setamount(1);
  }

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => {
      console.log("✅ Razorpay Loaded:", window.Razorpay);
      if (window.Razorpay) {
          console.log("🎯 Razorpay is Ready!");
      } else {
          console.error("❌ Razorpay failed to initialize.");
      }
  };

  script.onerror = () => {
      console.error("❌ Razorpay Script Failed to Load");
  };

  document.body.appendChild(script);
    findamount();
    console.log(amount);
  }, []);

  console.log(typeof window.Razorpay);


  //payment gateway:
  async function paymentgateway() {
    
    const amountInput = amount;
    const amountValue = amount;
    // const amountValue = 1 ;

    // Validate the entered amount
    if (!amountValue || amountValue <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    // Convert the amount to smallest currency unit (paise for INR)
    const amountInPaise = amount;

    try {
      // Step 1: Create an order on the backend
      const orderResponse = await fetch("https://skydome-backend-6cky.onrender.com/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: amountInPaise.toString(),
          currency: "INR",
          receipt: "receipt123",
        }),
      });
      const orderData = await orderResponse.json();
      console.log("🔹 Order Created:", orderData);
      if (!orderData.id) {
        alert("Error: Order ID not received! Please try again.");
        return;
      }
      

      // Step 2: Open Razorpay checkout
      const options = {
        key: "rzp_live_Qjygd93pVsglFk", // Replace with your Razorpay Key ID
        amount: amountInPaise.toString(),
        currency: "INR",
        name: "Skydome Aviation",
            description: `Payment from skydome aviation`,
            image: "https://i.imghippo.com/files/Zv4969meY.png",
        order_id: orderData.id,
        handler: async function (response) {
          
            setLoading(true);
            console.log("✅ Payment Success:", response);
          
            if (!response.razorpay_order_id || !response.razorpay_payment_id) {
              alert("Payment failed: Order ID or Payment ID missing.");
              setLoading(false);
              return;
            }
          
            // Manually verify the payment
            verifyPayment(response);

        },
        prefill: {
          name: formData.fname + " " + formData.lname,
          email: formData.email,
          contact: formData.number,
        },
        theme: {
          color: "#3399cc",
        },
        modal: {
          escape: false, // Prevent closing with ESC key
        },
      };

  

      const rzp = new Razorpay(options);

       // **Close Event Listener:** Detect when user exits payment gateway
    rzp.on("payment.failed", function (response) {
      console.error("❌ Payment Failed:", response.error);
      console.log("Payment Failed", response.error.description);
      setLoading(false);
    });

    rzp.on("close", function () {
      console.log("Payment gateway closed by user");
      setLoading(false); // **Hide loader when user exits**
    });

      rzp.open();

      // **Extra Safety:** Verify payment even if `handler` doesn’t trigger
      setTimeout(() => verifyPaymentManually(orderData.id), 15000);
    } catch (error) {
      setLoading(false); // ❌ Hide loading on error
      console.error("Error during payment process", error);
    }
  }

  // Payment verification function
  async function verifyPayment(response) {
    
    try {
      // Step 3: Verify the payment on the backend
      const verifyResponse = await fetch(
        "https://skydome-backend-6cky.onrender.com/verify-payment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          }),
        }
      );

      const verifyData = await verifyResponse.json();
      console.log("🔹 Verification Response:", verifyData);

      if (verifyData.message === "Payment verification successful") {
        console.log("Payment successful:", verifyData);
        setpayment_complete("true");

        // Save Payment Details in Database
        savePaymentData(
          response.razorpay_payment_id,
          response.razorpay_order_id
        );
      } else {
        alert("Payment verification failed!");
      }
    } catch (error) {
      console.error("Error verifying payment", error);
    }
  }

  // Save Payment Data Function
  async function savePaymentData(paymentId, orderId) {
    setLoading(true);
    try {
      const paymentDetails = {
        login_email: formData.login_email, // Ensure correct email field
        amount: amount, // Save actual paid amount
        paymentId: paymentId,
        orderId: orderId,
      };

      const saveResponse = await fetch(
        "https://skydome-backend-6cky.onrender.com/api/save-payment-data",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(paymentDetails),
        }
      );

      if (saveResponse.ok) {
       
        handlepaymentcomplete();
      }
    } catch (error) {
      console.error("Error saving payment data", error);
    }
  }

  // **Extra Safety**: Manual Payment Verification (Runs after 15 sec)
  async function verifyPaymentManually(orderId) {
    try {
      const orderStatusResponse = await fetch(
        `https://skydome-backend-6cky.onrender.com/get-order-status/${orderId}`
      );
      const orderStatus = await orderStatusResponse.json();

      if (orderStatus.status === "paid" && setpayment_complete == "false") {
        console.log("Manual Payment Check: Payment was successful.");
        setpayment_complete("true");
        savePaymentData(orderStatus.payment_id, orderId);
        alert("Payment Successfully! Your payment details have been saved!");
        setLoading(false);
        handlepaymentcomplete();
      }
    } catch (error) {
      console.error("Manual payment verification failed", error);
    }
  }

  return (
    <>
    {/* Full-Screen Loading Overlay */}
    {loading && (
        <div className="loading-overlay">
          <div className="loading-spinner"></div>
          <p className="loading-text">Processing Payment...</p>
        </div>
      )}

      {/* Payment Container */}
      <div className="payment-container">
        <h3>💳 Step 4: Payment</h3>
        <p className="payment-description">
          Please review your details before proceeding with the payment.
        </p>

        <div className="payment-details">
          <div className="payment-field">
            <span className="label">Amount:</span>
            <span className="value">₹ {amount}</span>
          </div>
          <div className="payment-field">
            <span className="label">Name:</span>
            <span className="value">
              {formData.fname} {formData.lname}
            </span>
          </div>
          <div className="payment-field" id="payment_email">
            <span className="label">Email:</span>
            <span className="value">{formData.email}</span>
          </div>
        </div>

        <div className="warning-box">
          ⚠️ <strong>Important:</strong> The amount once paid will{" "}
          <strong>not be refunded</strong> under any circumstances.
        </div>

        <button className="pay-now-button" onClick={paymentgateway}>
          Proceed to Pay
        </button>
      </div>
    </>
  );
}
export default Payment_page;
