import React from "react";

const ShippingExchangePolicy = () => {
  const containerStyle = {
    width: "80%",
    margin: "auto",
    background: "#fff",
    padding: "20px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  };
  const headingStyle = { color: "#0073e6" };
  const importantStyle = { color: "red", fontWeight: "bold" };
  const listItemStyle = { marginBottom: "10px" };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f4f4f4", padding: "20px" }}>
      <div style={containerStyle}>
        <h1 style={headingStyle}>Shipping and Exchange Policy</h1>
        <p>At SkyDome Aviation, we prioritize customer satisfaction and aim to provide transparent shipping and exchange policies. Below are the details:</p>
        
        <h2 style={headingStyle}>Shipping Policy</h2>
        <ul>
          <li style={listItemStyle}><b>Shipping Methods:</b> We use reliable courier services to ensure timely and safe delivery. Tracking details will be provided upon dispatch.</li>
          <li style={listItemStyle}><b>Delivery Time:</b> Orders are processed within 2-3 business days and typically delivered within 5-7 business days. Delays may occur due to unforeseen circumstances.</li>
          <li style={listItemStyle}><b>Shipping Charges:</b> Shipping fees are calculated based on weight, dimensions, and destination. Free shipping is available for orders above a certain value.</li>
          <li style={listItemStyle}><b>International Shipping:</b> Available on request. Additional charges and customs duties may apply.</li>
        </ul>
        
        <h2 style={headingStyle}>Exchange Policy</h2>
        <ul>
          <li style={listItemStyle}><b>Eligibility:</b> Items must be in original condition, unused, and returned within 15 days of delivery.</li>
          <li style={listItemStyle}><b>Process:</b> Contact our customer support team to initiate an exchange. Provide your order details and reason for the exchange.</li>
          <li style={listItemStyle}><b>Shipping for Exchanges:</b> Customers are responsible for return shipping costs unless the exchange is due to a defect or error on our part.</li>
          <li style={listItemStyle}><b>Non-Exchangeable Items:</b> Customized or perishable items are not eligible for exchange.</li>
        </ul>
        
        <h2 style={headingStyle}>Additional Information</h2>
        <ul>
          <li style={listItemStyle}><b>Contact Information:</b> For queries or concerns, reach out to us via email or phone.</li>
          <li style={listItemStyle}><b>Policy Updates:</b> SkyDome Aviation reserves the right to modify these policies. Changes will be communicated on our website.</li>
        </ul>
        
        <h2 style={importantStyle}>Exam Registration Policy</h2>
        <p>To register for an online exam, users must first complete the registration process. Once registered, our team will contact you with the exam schedule.</p>
        <p style={importantStyle}>Please note: Once the registration for an exam is completed, it <u>cannot be refunded, canceled, or exchanged</u>.</p>
      </div>
    </div>
  );
};

export default ShippingExchangePolicy;
