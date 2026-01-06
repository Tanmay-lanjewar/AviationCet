import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { data } from "./Course-data";
import { useParams, useNavigate } from "react-router-dom";

const CourseSingle = () => {
    const { id } = useParams();
    const course = data[id];
    const navigate = useNavigate();

    if (!course) {
        navigate("/courses");
        return null;
    }

    return (
        <div>
            <div data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
                <div className="site-wrap">
                    <br /><br /><br /><br />


                    <div
                        className="site-section ftco-subscribe-1 site-blocks-cover pb-4"
                        style={{
                            backgroundImage: `url(${course.backgroundImage || '/src/WEB/images/bg_1.jpg'
                                })`,
                        }}
                    >
                        <div className="container">
                            <div className="row align-items-end">
                                <div className="col-lg-7">
                                    <h2 className="mb-0">{course.title}</h2>
                                    <p>{course.desc}</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="custom-breadcrumns border-bottom">
                        <div className="container">
                            <a href="/">Home</a>
                            <span className="mx-3 icon-keyboard_arrow_right"></span>
                            <a href="/courses">Courses</a>
                            <span className="mx-3 icon-keyboard_arrow_right"></span>
                            <span className="current">Course</span>
                        </div>
                    </div>


                    <div className="site-section">
                        <div className="container">
                            <div className="ml-auto align-self-center">
                                <h2 className="section-title-underline mb-5">
                                    <span>Course Details</span>
                                </h2>
                                <div className="row">
                                    {/* Course Information */}
                                    <div className="col-lg-5 col-md-6">
                                        <div>
                                            <h3>{course.heading}</h3>
                                            <p>{course.info}</p>
                                        </div>
                                    </div>

                                    {/* Course Image */}
                                    <div className="col-lg-7 col-md-6 mb-4 d-flex justify-content-center">
                                        <div>
                                            <img
                                                src={new URL(course.image, import.meta.url).toString()}
                                                alt={course.heading}
                                                className="img-fluid"
                                                style={{ maxHeight: '300px', width: 'auto' }}
                                            />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CourseSingle;
