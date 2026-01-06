import React from "react";
import './Color.css';
const Footer = () => {
    return (
        <div>
            <div
                className="section-bg style-1"
                style={{ backgroundImage: 'url("/images/hero_1.jpg")' }}
            >
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-5 mb-lg-0">
                            <span className="icon flaticon-mortarboard" />
                            <h3>Exam Excellence</h3>
                            <p>
                                Prepare for success with expertly designed aviation exams, crafted to evaluate your skills and knowledge for a soaring career in the skies.
                            </p>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-5 mb-lg-0">
                            <span className="icon flaticon-school-material" />
                            <h3>Aviation Expertise</h3>
                            <p>
                                Our platform ensures accurate and comprehensive assessments to help aspiring pilots, engineers, and aviation professionals achieve their dreams.
                            </p>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-5 mb-lg-0">
                            <span className="icon flaticon-library" />
                            <h3>Your Path to Certification</h3>
                            <p>
                                Unlock new opportunities with globally recognized aviation certifications, setting you apart in the competitive world of aviation.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="row align-items-center">
                                <div className="col-lg-4">
                                    <p className="mb-4">
                                        <img src="/images/logo2.png" alt="Skydome Aviation Logo" className="img-fluid" />
                                    </p>
                                </div>
                                <div className="col-lg-8">
                                    <h6 className="mb-2">SKYDOME AVIATION PVT. LTD</h6>
                                    <p>
                                        <a href="https://www.google.com/maps/search/Plot+no+-+PS4,+Basement+,+Bestech+City+Plots,+Sector-7,+Dharuhera,+Haryana,+India+-+123110" target="_blank" className="light">
                                            📍 Plot No. PS4, Basement, Bestech City Plots,<br></br> Sector-7, Dharuhera, Haryana, India - 123110
                                        </a>
                                    </p>
                                   
              
              <a  href="tel:+919356986816" className="footer_contact_info small mr-3 blue">
                <span className="footer_contact_info icon-phone2 mr-2 blue" /> +91 9356986816
              </a><br></br>
              <a
                href="mailto:aviationcetofficial@gmail.com"
                className="footer_contact_info small mr-3 blue"
              >
                <span className="footer_contact_info icon-envelope-o mr-2 blue" />{" "}
                aviationcetofficial@gmail.com
              </a><br></br>
             
            
                                </div>
                            </div>



                        </div>
                        <div className="col-lg-3">
                            <h3 className="footer-heading">
                                <span>Aviation Links</span>
                            </h3>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="/policy" className="light">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="term_and_condition" className="light">Term and Condition</a>
                                </li>
                                <li>
                                    <a href="/shifing_and_exchange" className="light">Shifing and Exchange</a>
                                </li>
                                <li>
                                    <a href="/refund_and_cancellation" className="light">Refund and Cancellation</a>
                                </li>
                               
                                
                            </ul>
                        </div>

                        <div className="col-lg-3">
                            <h3 className="footer-heading">
                                <span>Our Courses</span>
                            </h3>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="#" className="light">Aeronautical Engineering</a>
                                </li>
                                <li>
                                    <a href="#" className="light">Aerospace Engineering</a>
                                </li>
                                <li>
                                    <a href="#" className="light">BBA in Aviation Management</a>
                                </li>
                                <li>
                                    <a href="#" className="light">MBA in Aviation Management</a>
                                </li>
                                <li>
                                    <a href="#" className="light">Cabin Crew</a>
                                </li>
                                <li>
                                    <a href="#" className="light">Ground Staff</a>
                                </li>
                            </ul>
                        </div>

                    </div>
                    
                </div>
            </div>
        </div>
    );

}
export default Footer;