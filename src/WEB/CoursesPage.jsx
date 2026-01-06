import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import { data } from "./Course-data";
import './Color.css';
const CoursesPage = () => {
    return (
        <div>
            {/* External stylesheets moved to the index.html or global CSS */}
            <div data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
                <div className="site-wrap">
                  

                    <div className="site-section ftco-subscribe-1 site-blocks-cover pb-4" style={{ backgroundImage: "url('/bg_1.jpg')" }}>
                        <div className="container">
                            <div className="row align-items-end">
                                <div className="col-lg-7">
                                    <h2 className="mb-0">Courses</h2>
                                    <p>Our courses are designed to equip you with the skills for a successful aviation career.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="custom-breadcrumns border-bottom">
                        <div className="container">
                            <a href="/">Home</a>
                            <span className="mx-3 icon-keyboard_arrow_right"></span>
                            <span className="current">Courses</span>
                        </div>
                    </div>

                    <div className="site-section">
                        <div className="container">
                            <div className="row">
                                {data.map((item, index) => (
                                    <div key={index} className="col-lg-4 col-md-6 mb-4">
                                        <section className="course-1-item">
                                            <figure  id='courses_img_div' className="thumnail">
                                                <Link to={`/course-single/${index}`} >
                                                    <img
                                                        src={item.image}
                                                        alt="Course Image"
                                                        className="img-fluid"
                                                    />
                                                </Link>

                                                <div className="category">
                                                    <h3>{item.title}</h3>
                                                </div>
                                            </figure>
                                            <div className="course-1-content pb-4">
                                                <h2>{item.heading}</h2>
                                                <div className="rating text-center mb-3">
                                                    <span className="icon-star2 text-warning" />
                                                    <span className="icon-star2 text-warning" />
                                                    <span className="icon-star2 text-warning" />
                                                    <span className="icon-star2 text-warning" />
                                                    <span className="icon-star2 text-warning" />
                                                </div>

                                                <p>
                                                    <Link to={`/course-single/${index}`} className="btn bg-blue rounded-0 px-4">
                                                        Explore &nbsp;➤
                                                    </Link>
                                                </p>
                                            </div>
                                        </section>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CoursesPage;
