import React, { useRef } from 'react';
import Footer from "./Footer";
import Header from "./Header";
import emailjs from "@emailjs/browser";
import './Color.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ContactPage = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_vicaw07', 'template_xcihmoh', form.current, {
                publicKey: 'vCvF6v_xpUlLxaTp2',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    handleClick();
                    form.current.reset();
                }
            )
            .catch((error) => {
                    console.log('FAILED...', error.text);
                    toast.error(`FAILED TRY AGAIN LATER`, {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                    });
            });
    };
    const handleClick = () => {
        toast.success("We will contact you soon!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            
        });
        
    };

    return (
        <div>
         
            <link href="css/jquery.mb.YTPlayer.min.css" media="all" rel="stylesheet" type="text/css" />

            <link rel="stylesheet" href="css/style.css" />
            <div data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
                <div className="site-wrap">
                   
                    <div className="site-section ftco-subscribe-1 site-blocks-cover pb-4" style={{ backgroundImage: "url('/bg_1.jpg')" }}>
                        <div className="container">
                            <div className="row align-items-end">
                                <div className="col-lg-7">
                                    <h2 className="mb-0">Contact</h2>
                                    <p>Get in touch with us for queries about courses, exams, or aviation careers.</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="custom-breadcrumns border-bottom">
                        <div className="container">
                            <a href="/">Home</a>
                            <span className="mx-3 icon-keyboard_arrow_right"></span>
                            <span className="current">Contact</span>
                        </div>
                    </div>

                    <div className="site-section">
                        <div className="container">
                            <form ref={form} onSubmit={sendEmail}>
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <label htmlFor="fname">First Name</label>
                                        <input type="text" id="fname" className=" fl form-control form-control-lg" name="f_name" />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label htmlFor="lname">Last Name</label>
                                        <input type="text" id="lname" className="fl form-control form-control-lg" name="l_name" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <label htmlFor="eaddress">Email Address</label>
                                        <input type="text" id="eaddress" className="fl form-control form-control-lg" name="email" />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label htmlFor="tel">Mobile Number</label>
                                        <input type="text" id="tel" className="fl form-control form-control-lg" name="Number" />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-12">
                                        <input
                                            type="submit"
                                            value="Send Message"
                                            className="btn bg-blue btn-lg px-5"
                                            style={{ marginTop: "30px" }}
                                           
                                        />
                                        <ToastContainer />
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div >


        </div >
    );
}
export default ContactPage;