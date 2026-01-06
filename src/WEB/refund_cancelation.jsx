import React from "react";

const RefundCancellation = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: 0, padding: "20px", backgroundColor: "#f4f4f4", color: "#333" }}>
      <div style={{ width: "80%", margin: "auto", background: "#fff", padding: "20px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}>
        <h1 style={{ color: "#0073e6" }}>Refund & Cancellation Policy</h1>
        <p>At SkyDome Aviation, we maintain a transparent policy regarding refunds and cancellations. Please read the details carefully:</p>
        
        <h2 style={{ color: "#0073e6" }}>Registration Fees</h2>
        <ul>
          <li><b>General & OBC (MALES):</b> ₹1200/-</li>
          <li><b>SC/ST (MALES):</b> ₹1000/-</li>
          <li><b>All Female Candidates:</b> ₹1000/-</li>
        </ul>
        
        <h2 style={{ color: "#0073e6" }}>Refund Policy</h2>
        <p><b style={{ color: "red" }}>No Refund:</b> Once the registration is completed, fees are non-refundable under any circumstances.</p>
        
        <h2 style={{ color: "#0073e6" }}>Cancellation Policy</h2>
        <p><b style={{ color: "red" }}>No Cancellations:</b> Once registration is submitted and payment is processed, it cannot be canceled or modified.</p>
        
        <h2 style={{ color: "#0073e6" }}>Additional Information</h2>
        <ul>
          <li><b>Contact Information:</b> For any queries, please reach out to our support team via email or phone.</li>
          <li><b>Policy Updates:</b> SkyDome Aviation reserves the right to modify these policies. Any updates will be published on our website.</li>
        </ul>
      </div>
    </div>
  );
};

export default RefundCancellation;
