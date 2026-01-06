import React from "react";
import Footer from "./Footer";
import './Color.css';
import { Link } from "react-router-dom";
import ExploreSkydome from "./ExploreSKydome"; 


const Homepage = () => {
    return (
        <div>

            <div className="banner-container" style={{marginTop:"-70px"}}>
      <img src="/Plane1.png" alt="Aviation Banner" className="banner-image" />
      <div className="banner-overlay">
        <h1>Unlock your aviation potential</h1>
       <Link to="/Registration">  <button className="register-button">Register Now</button> </Link>
      </div>
               </div>
            <div className="site-section">
                <div className="container">
                    <div className="row mb-5 justify-content-center text-center">
                        <div className="col-lg-5 mb-5">
                            <h2 className="section-title-underline mb-5">
                                <span>AVIATION CET OFFICIAL</span>
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                            <div className="feature-1 border">
                                <div className="icon-wrapper custom-bg">
                                    <span className="flaticon-mortarboard text-white" />
                                </div>

                                <div className="feature-1-content">
                                    <h2>Personalize Learning</h2>
                                    <p>
                                        Aviation provides a customized learning journey, tailored to the needs of future pilots, engineers, and enthusiasts. With flexible schedules and content that aligns with personal goals, students can progress at their own pace, making learning both effective and accessible.
                                    </p>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                            <div className="feature-1 border">
                                <div className="icon-wrapper custom-bg">
                                    <span className="flaticon-school-material text-white" />
                                </div>
                                <div className="feature-1-content">
                                    <h2>Scope in Aviation</h2>
                                    <p>
                                        The aviation industry offers vast opportunities across roles like commercial aviation, aerospace engineering, airport management, flight operations, and more.It ensures safe and efficient travel, with pilots and cabin crew playing key roles in air safety and service.
                                    </p>

                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                            <div className="feature-1 border">
                                <div className="icon-wrapper custom-bg">
                                    <span className="flaticon-library text-white" />
                                </div>
                                <div className="feature-1-content">
                                    <h2>Why Pursue Aviation?</h2>
                                    <p>
                                        Aviation courses unlock global career opportunities in piloting, engineering, and air traffic control. Students gain practical experience with advanced technology while stepping into a dynamic, high-demand industry with great earning potential and thrilling adventure.
                                    </p>

                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <ExploreSkydome /> {/* Add the new component here */}   

<br></br>
          
            <div
                className="section-bg " id="hi"
            >
                <div className="container">
                    <div className="skydome_grid row space">
                        <div className="col-12 col-sm-8">
                            <h2 className="section-title-underline style-2">
                                <span style={{ color: "#183661", marginBottom: "20px" }}>SkyDome Family</span><br></br>
                            </h2>
                            <p className="lead" >

                                <b>LEARN MORE ABOUT WHAT OUR MOTHER COMPANY DOES</b><br></br>
                                SkyDome Aviation Pvt. Ltd is not just a company; it’s a vision—a driving force dedicated to transforming the aviation industry. With innovation and excellence at its core, SkyDome Aviation is shaping the future of aviation.
                                We look forward to partnering with you to reach new heights and redefine possibilities in the skies.

                                Experience the SkyDome difference. Thank you for choosing SkyDome Aviation Pvt. Ltd., where the sky is not the limit—it’s just the beginning of your journey.
                            </p>
                        </div>
                        <div id="skydome_none" className="col-12 col-sm-4 d-none d-sm-block">
                            <img src = "/logo3.png" style={{ marginTop : "40px",marginLeft: "60px"}} className="responsive-logo"/>
                        </div>
                    </div>
                    
                </div>
                
            </div>

        </div >
    );
};

export default Homepage;
