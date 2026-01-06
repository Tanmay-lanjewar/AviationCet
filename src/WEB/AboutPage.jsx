import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import './Color.css';
import { data, data1, data2, data3, data4 } from './Data_About';
const AboutPage = () => {

    return (
        <div>
        
            <div data-spy="scroll" data-target=".site-navbar-target" data-offset="300">

                <div className="site-wrap">
                  
                    <div className="site-section ftco-subscribe-1 site-blocks-cover pb-4" style={{ backgroundImage: "url('/bg_1.jpg')" }} >
                        <div className="container">
                            <div className="row align-items-end">
                                <div className="col-lg-7">
                                    <h2 className="mb-0">About Us</h2>
                                    <p>Learn about our journey, mission, and dedication to your success.</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="custom-breadcrumns border-bottom">
                        <div className="container">
                            <a href="/">Home</a>
                            <span className="mx-3 icon-keyboard_arrow_right"></span>
                            <span className="current">About Us</span>
                        </div>
                    </div>


                    <div className="container pt-5" id="mb-3">
                        <div>
                            <div>
                                <h2 className="section-title-underline" id="mb-3">
                                    <span>ABOUT AVIATION CET</span>
                                </h2>
                            </div>
                            <div>
                                <div>
                                    <p>
                                        <b>Aviation CET Official</b> is a national-level entrance exam that helps students gain admission to top aviation universities,
                                        colleges, and institutes across India. Whether you want to become a pilot, aviation engineer, or pursue other aviation-related courses,
                                        Aviation CET Official connects you with the best institutions in the industry.
                                    </p>

                                </div>
                                <div>
                                    <p>
                                        Our motto, <b>"Aviate, Navigate, Excel,"</b> reflects our commitment to guiding students towards success in the aviation field. We provide
                                        expert advice and support to help students make informed decisions about their careers. From pilot licenses to engineering degrees, diploma
                                        courses, and certifications, we offer a variety of programs for students after their 12th grade or diploma.
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        We also offer scholarships up to 100% based on your All India Rank (AIR) to ensure that financial constraints don’t stand in your way. Aviation
                                        CET Official is here to guide you through the entire admission process—from exam preparation to securing a spot at your dream institution.
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        With our expert team and strong connections with leading aviation schools, we help you navigate the admissions process and give you the tools you
                                        need to succeed in the competitive world of aviation. Take the first step toward a promising career in aviation with Aviation CET Official!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container pt-5" id="mb-3">
                        <div>
                            <div>
                                <h2 className="section-title-underline" id="mb-3">
                                    <span>ELIGIBILITY</span>
                                </h2>
                            </div>
                            <div>
                                <div>
                                    <table border="1" style={{ borderCollapse: "collapse", width: "100%" }}>
                                        <thead>
                                            <tr>
                                                <th>S/no</th>
                                                <th>Category</th>
                                                <th>Course/Stream</th>
                                                <th>Eligibility</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.map((item, index) => (
                                                <React.Fragment key={index}>
                                                    {item.courses.map((course, idx) => (
                                                        <tr key={idx}>
                                                            {idx === 0 && (
                                                                <td rowSpan={item.courses.length} style={{ textAlign: "center" }}>
                                                                    {index + 1}
                                                                </td>
                                                            )}
                                                            {idx === 0 && (
                                                                <td rowSpan={item.courses.length} style={{ textAlign: "center" }}>
                                                                    {item.category}
                                                                </td>
                                                            )}
                                                            <td>{course.name}</td>
                                                            <td>{course.eligibility}</td>
                                                        </tr>
                                                    ))}
                                                </React.Fragment>
                                            ))}
                                        </tbody>
                                    </table>
                                    <div>
                                        <a href="/Eligibility.png" className="btn bg-blue btn-sm px-3 " style={{marginLeft:"14px",marginTop:"20px",padding:"8px"}} download>
                                            Download
                                        </a>
                                        <a href="/Eligibility.png" className="btn bg-blue btn-sm px-3 " style={{marginLeft:"14px",marginTop:"20px",padding:"8px"}} target="_blank">
                                            View
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container pt-5" id="mb-3">
                        <div>
                            <div>
                                <h2 className="section-title-underline" id="mb-3">
                                    <span>EXAM DETAILS</span>
                                </h2>
                            </div>
                            <div>
                                <div>
                                    <p>
                                        The question paper consists of 100 multiple-choice questions (MCQ).
                                    </p>

                                </div>
                                <div>
                                    <p>
                                        Question paper will be available in both Hindi and English language.This exam will be held in online modes.
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        You will get 1 hour 30 minutes to complete your exam,<b>(54 seconds per question).</b>
                                    </p>
                                </div>
                                <br></br>
                                <div>
                                    <h5>Exam Pattern for 12th (PCM Students)</h5>
                                    <table border="1" style={{ borderCollapse: "collapse", width: "60%" }}>
                                        <thead>
                                            <tr>
                                                <th style={{ textAlign: "center" }}>S. No.</th>
                                                <th>Subject</th>
                                                <th>No. of Questions</th>
                                                <th>Marks</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data1.map((item, index) => (
                                                <tr key={index}>
                                                    <td style={{ textAlign: "center" }}>{index + 1}</td>
                                                    <td>{item.subject}</td>
                                                    <td>{item.question}</td>
                                                    <td>{item.mark}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    
                                    <div>
                                        <a href="/PCM.png" className="btn bg-blue btn-sm px-3 " style={{marginLeft:"14px",marginTop:"20px",padding:"8px"}} download>
                                            Download
                                        </a>
                                        <a href="/PCM.png" className="btn bg-blue btn-sm px-3 " style={{marginLeft:"14px",marginTop:"20px",padding:"8px"}} target="_blank">
                                            View
                                        </a>
                                    </div>
                                </div>
                                <br></br>
                                <div>
                                    <h5>Exam Patterns for 3-Year Engineering Diploma Holders, B.Tech, or Higher<br></br> Qualification in Science with Physics, Chemistry & Mathematics</h5>
                                    <table border="1" style={{ borderCollapse: "collapse", width: "60%" }}>
                                        <thead>
                                            <tr>
                                                <th style={{ textAlign: "center" }}>S. No.</th>
                                                <th>Subject</th>
                                                <th>No. of Questions</th>
                                                <th>Marks</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data2.map((item, index) => (
                                                <tr key={index}>
                                                    <td style={{ textAlign: "center" }}>{index + 1}</td>
                                                    <td>{item.subject}</td>
                                                    <td>{item.question}</td>
                                                    <td>{item.mark}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <div>
                                        <a href="/Diploma.png" className="btn bg-blue btn-sm px-3 " style={{marginLeft:"14px",marginTop:"20px",padding:"8px"}} download>
                                            Download
                                        </a>
                                        <a href="/Diploma.png" className="btn bg-blue btn-sm px-3 " style={{marginLeft:"14px",marginTop:"20px",padding:"8px"}} target="_blank">
                                            View
                                        </a>
                                    </div>
                                </div>
                                <br></br>
                                <div>
                                    <h5>Exam Pattern for 12th (Non-PCM Students)</h5>
                                    <table border="1" style={{ borderCollapse: "collapse", width: "70%" }}>
                                        <thead>
                                            <tr>
                                                <th style={{ textAlign: "center" }}>S. No.</th>
                                                <th>Subject</th>
                                                <th>No. of Questions</th>
                                                <th>Marks</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data3.map((item, index) => (
                                                <tr key={index}>
                                                    <td style={{ textAlign: "center" }}>{index + 1}</td>
                                                    <td>{item.subject}</td>
                                                    <td>{item.question}</td>
                                                    <td>{item.mark}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <div>
                                        <a href="/Non-PCM.png" className="btn bg-blue btn-sm px-3 " style={{marginLeft:"14px",marginTop:"20px",padding:"8px"}} download>
                                            Download
                                        </a>
                                        <a href="/Non-PCM.png" className="btn bg-blue btn-sm px-3 " style={{marginLeft:"14px",marginTop:"20px",padding:"8px"}} target="_blank">
                                            View
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container pt-5" id="mb-3">
                        <div>
                            <div>
                                <h2 className="section-title-underline" id="mb-3">
                                    <span>EXAMINATION FEES</span>
                                </h2>
                            </div>
                            <div>
                                <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '8px', backgroundColor: '#f9f9f9' }}>
                                    <p style={{ fontSize: '18px', lineHeight: 1.6 }}>
                                        <b style={{ fontSize: '22px', color: '#333', textDecoration: 'underline' }}>Registration Fees</b><br /><br />

                                        <span style={{ fontWeight: 'bold', color: '#555' }}>Caste:</span><br /><br />

                                        <span style={{ fontSize: '18px' }}>
                                            <b style={{ color: '#0E548E' }}>General & OBC (MALES)</b> - ₹1200/-<br /><br />
                                            <b style={{ color: '#0E548E' }}>SC/ST (MALES)</b> - ₹1000/-<br /><br />
                                            <b style={{ color: '#0E548E' }}>All Female Candidates</b> - ₹1000/-<br /><br />
                                            <b style={{ color: 'red' }}> *No Refund</b>
                                        </span>
                                    </p>
                                </div>
                                <br></br>
                                <b style={{ fontSize: '22px', color: '#333', textDecoration: 'underline' }}>Payment Method</b><br /><br />
                                <div>
                                    <p style={{ color: 'black' }}>
                                        The fee of the online application form will be done
                                        through the debit card, netbanking, or
                                        online transactions (such as google pay, Paytm, and
                                        many more).
                                    </p>
                                </div>
                                <div>
                                    <p style={{ color: 'black' }}>
                                        <b style={{ color: 'red' }}> Note:</b> that the bank may additionally charge some
                                        service charges plus applicable taxes while making the
                                        payment through a Credit/Debit card/ Net. Banking.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container pt-5" id="mb-3">
                        <div>
                            <div>
                                <h2 className="section-title-underline" id="mb-3">
                                    <span>SCHOLARSHIP</span>
                                </h2>
                            </div>
                            <div>
                                <div>
                                    <p>
                                        Unlock Your Dreams with Up to 100% Scholarship! Earn It with Your AIR (All India Rank) and Soar High in Your Career!.
                                    </p>

                                </div>
                                <div>
                                    <p>
                                        <b style={{ color: 'red' }}> Note:</b> <u>Scholarships are applicable to tuition fees for the 1st semester only!</u>
                                    </p>
                                </div>
                                <div>
                                    <h5>Exam Pattern for 12th (Non-PCM Students)</h5>
                                    <table border="1" style={{ borderCollapse: "collapse", width: "70%" }}>
                                        <thead>
                                            <tr>
                                                <th style={{ textAlign: "center" }}>S. No.</th>
                                                <th>Ranks</th>
                                                <th>Maximum Students</th>
                                                <th>Scholarship on Tuition Fees</th>
                                                <th>Maximum Scholarships in INR</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data4.map((item, index) => (
                                                <tr key={index}>
                                                    <td style={{ textAlign: "center" }}>{index + 1}</td>
                                                    <td>{item.rank}</td>
                                                    <td>{item.max_stu}</td>
                                                    <td>{item.tut_fees}</td>
                                                    <td>{item.scholar}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <div>
                                        <a href="/Scholarship.png" className="btn bg-blue btn-sm px-3 " style={{marginLeft:"14px",marginTop:"20px",padding:"8px"}} download>
                                            Download
                                        </a>
                                        <a href="/Scholarship.png" className="btn bg-blue btn-sm px-3 " style={{marginLeft:"14px",marginTop:"20px",padding:"8px"}} target="_blank">
                                            View
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br></br><br></br>
                    
                </div>
            </div>
        </div>


    );

}
export default AboutPage;