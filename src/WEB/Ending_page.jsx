import React, { useEffect, useState, useRef } from "react";
import "./Ending_page.css";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function Ending_page({formData}) {
    const [paymentData, setPaymentData] = useState({}); // Payment Data
  
    const formRef = useRef(); // Ref to capture form content
    console.log(formData);
  
  

    useEffect(() => {
      const fetchPaymentData = async () => {
        const savedEmail = localStorage.getItem('email');
        if (!savedEmail) return;
    
        const paymentResponse = await fetch(`https://skydome-backend-6cky.onrender.com/api/get-payment-data?login_email=${savedEmail}`);
        if (paymentResponse.ok) {
          const paymentData = await paymentResponse.json();
          console.log("Fetched Payment Data:", paymentData);
    
          if (paymentData.length > 0) {
            setPaymentData({ ...paymentData[0] });
            setCurrentStep(5);
          }
        }
      };
    
      fetchPaymentData();
    }, [formData]); // 🔄 Runs only after formData updates
    
  
   

    const downloadPDF = () => {
      const image = formRef.current.querySelector("img");
      
      // If the image is not loaded yet, wait for it to load
      if (image && !image.complete) {
        // Wait until image is fully loaded
        image.onload = () => {
          setTimeout(generatePDF, 500);  // Give it a little time after the image loads
        };
      } else {
        generatePDF();  // If image is already loaded, generate PDF
      }
    };
    
    const generatePDF = () => {
      html2canvas(formRef.current, {
        scale: 2,  // Higher scale for better image quality
        useCORS: true,  // Ensure CORS is handled for external images
        allowTaint: false,  // Prevents tainting when using external images
      })
        .then((canvas) => {
          const imgData = canvas.toDataURL("image/png");
          const pdf = new jsPDF("p", "mm", "a4");
          const imgWidth = 190;
          const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
          // Add the image to the PDF at position (10, 10)
          pdf.addImage(imgData, "PNG", 10, 10, imgWidth, imgHeight);
          pdf.save("Registration_Confirmation.pdf");
        })
        .catch((err) => console.error("Error generating PDF:", err));
    };
    
    
    return(
        <div ref={formRef} className="confirmation-container">
      <h2>🎉 Registration Successful!</h2>
      <p>Thank you, <strong>{formData.fname} {formData.lname}</strong>. You are successfully registered for the online exam.</p>
      <p>We will contact you soon regarding your exam schedule.</p>

      {/* User Details */}
      <div className="details-section">
        <h3>📌 Your Details</h3>
        <img src={formData.photo} alt="Uploaded" className="profile-photo" />
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Phone:</strong> {formData.number}</p>
        <p><strong>Father's Name:</strong> {formData.fatherName}</p>
        <p><strong>Mother's Name:</strong> {formData.motherName}</p>
        <p><strong>Address:</strong> {formData.address}, {formData.city}, {formData.state}, {formData.country}, {formData.pin}</p>
        <p><strong>Qualification:</strong> {formData.qualification}</p>
        <p><strong>Priority Choices:</strong> {formData.priority1}, {formData.priority2}, {formData.priority3}</p>
      </div>

      {/* Payment Details */}
      <div className="details-section">
        <h3>💳 Payment Details</h3>
        <p><strong>Payment ID:</strong> {paymentData.paymentId}</p>
        <p><strong>Order ID:</strong> {paymentData.orderId}</p>
        <p><strong>Amount Paid:</strong> ₹{paymentData.amount}</p>
        <p><strong>Status:</strong> ✅ {paymentData.status === "true" ? "Payment Successful" : "Payment Pending"}</p>
      </div>

      <div className="exam-info">
        <h3>📝 Exam Information</h3>
        <p>📅 Your online exam schedule will be shared soon. Stay tuned for updates!</p>
      </div>
      {/* PDF Download Button */}
      <button className="download-btn" onClick={downloadPDF}>📄 Download PDF</button>
    </div>
    )
}export default Ending_page;