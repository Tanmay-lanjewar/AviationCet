import React from 'react';

const TermsAndConditions = () => {
    const sectionTitleStyle = {
        color: "#183661",
        marginBottom: "20px"
    };

    const paragraphStyle = {
        textAlign: "justify",
        lineHeight: "1.6"
    };

    return (
        <div>
            <div className="site-wrap2">
                <div
                    className="site-section ftco-subscribe-1 site-blocks-cover pb-4"
                    style={{ backgroundImage: "url('/bg_1.jpg')" }}
                >
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-7">
                                <h2 className="mb-0">Terms and Conditions</h2>
                                <p>Please read these terms and conditions carefully before using our services.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-section">
                    <div className="container">
                        <h2 className="section-title-underline style-2" style={sectionTitleStyle}>
                            Terms and Conditions
                        </h2>
                        <p style={paragraphStyle}><strong>Welcome to SkyDome Aviation.</strong> By using our website and services, you agree to the following terms and conditions. Please read them carefully.</p>
                        
                        <h3 style={sectionTitleStyle}>1. Acceptance of Terms</h3>
                        <p style={paragraphStyle}>By accessing or using SkyDome Aviation’s website and services, you agree to comply with and be bound by these Terms and Conditions. If you do not agree with any part of these terms, you must not use our services.</p>

                        <h3 style={sectionTitleStyle}>2. User Responsibilities</h3>
                        <p style={paragraphStyle}><strong>Accuracy of Information:</strong> You agree to provide accurate, current, and complete information when using our services or contacting us.</p>
                        <p style={paragraphStyle}><strong>Compliance with Laws:</strong> You agree to comply with all applicable laws and regulations in your use of our services.</p>

                        <h3 style={sectionTitleStyle}>3. Intellectual Property</h3>
                        <p style={paragraphStyle}>All content on the SkyDome Aviation website, including but not limited to text, graphics, logos, and images, is the property of SkyDome Aviation or its content suppliers and is protected by intellectual property laws. You may not reproduce, distribute, or modify any content without our prior written consent.</p>

                        <h3 style={sectionTitleStyle}>4. Limitation of Liability</h3>
                        <p style={paragraphStyle}>SkyDome Aviation is not liable for any direct, indirect, incidental, or consequential damages arising from the use of our website or services. This includes, but is not limited to, damages for loss of profits, data, or other intangible losses.</p>

                        <h3 style={sectionTitleStyle}>5. Disclaimer of Warranties</h3>
                        <p style={paragraphStyle}>Our website and services are provided “as is” and “as available” without warranties of any kind, either express or implied. We do not guarantee that our website or services will be uninterrupted, secure, or free of errors.</p>

                        <h3 style={sectionTitleStyle}>6. Refund and Cancellation Policy</h3>
                        <p style={paragraphStyle}>Our refund and cancellation policies are outlined separately. Please review them for details on how refunds and cancellations are handled.</p>

                        <h3 style={sectionTitleStyle}>7. Termination</h3>
                        <p style={paragraphStyle}>SkyDome Aviation reserves the right to terminate or suspend access to our website and services at our sole discretion, without prior notice, for any reason, including breach of these Terms and Conditions.</p>

                        <h3 style={sectionTitleStyle}>8. Changes to Terms</h3>
                        <p style={paragraphStyle}>SkyDome Aviation may update these Terms and Conditions from time to time. We will notify you of any changes by posting the new Terms and Conditions on our website. Your continued use of our services after any changes constitutes acceptance of the new terms.</p>

                        <h3 style={sectionTitleStyle}>9. Governing Law</h3>
                        <p style={paragraphStyle}>These Terms and Conditions are governed by and construed in accordance with the laws of Haryana court. Any disputes arising from these terms shall be resolved in the courts of Haryana.</p>

                        <h3 style={sectionTitleStyle}>10. Contact Information</h3>
                        <p style={paragraphStyle}>For any questions or concerns regarding these Terms and Conditions, please contact us at:</p>
                        <ul>
                            <li><strong>Email:</strong> skydomeaviation@gmail.com</li>
                            <li><strong>Phone:</strong> 9356986816</li>
                            <li><strong>Address:</strong> No. PS4, Basement, Bestech City, Sector-7, Dharuhera-123110, Haryana</li>
                        </ul>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default TermsAndConditions;
