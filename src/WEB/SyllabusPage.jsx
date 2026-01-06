import React from "react";
import Footer from "./Footer";

import './Syllabus.css';
import './Color.css'
const SyllabusPage = () => {
    const syllabus = [
        {
            subject: "Mathematics",
            topics: [
                "Sets, Relations, Functions",
                "Complex numbers and Quadratic equations",
                "Matrices and Determinants",
                "Permutations and Combinations",
                "Mathematical induction",
                "Binomial theorem and its simple applications",
                "Sequences and Series",
                "Limit, Continuity and Differentiability",
                "Integral Calculus",
                "Differential equations",
                "Co-ordinate geometry",
                "Straight lines",
                "Conical sections",
                "Circles",
                "Three-dimensional geometry",
                "Vector algebra",
                "Statistics and Probability",
                "Measurement of dispersion",
                "Trigonometry",
                "Mathematical reasoning",
            ],
        },
        {
            subject: "General Awareness",
            topics: [
                "Static GK",
                "Science",
                "Books and Authors",
                "Current Affairs",
                "Portfolios",
            ],
        },
        {
            subject: "English",
            topics: [
                "Reading Comprehension",
                "Fill in the Blanks",
                "Spellings",
                "Phrases and Idioms",
                "Synonyms and Antonyms",
                "One-word Substitution",
                "Sentence Correction",
            ],
        },
        {
            subject: "Physics",
            topics: [
                "Physics and measurement",
                "Kinematics",
                "Laws of motion",
                "Work, Energy and Power",
                "Rotational motion",
                "Gravitation",
                "Properties of solids and liquids",
                "Thermodynamics",
                "Kinetic theory of gases",
                "Oscillations and waves",
                "Electrostatics",
                "Current electricity",
                "Magnetic effects of current and magnetism",
                "Electromagnetic induction and alternating currents",
                "Electromagnetic waves",
                "Optics",
                "Dual nature of matter and radiation",
                "Atoms and nuclear",
                "Electronic devices",
                "Communication systems",
            ],
        },
        {
            subject: "Chemistry",
            topics: [
                "Some basic concepts in chemistry",
                "Chemical thermodynamics",
                "Solutions",
                "Equilibrium",
                "Redox reactions and electrochemistry",
                "Chemical kinetics",
                "Surface chemistry",
                "Classification of elements and periodicity in properties",
                "General principles and processes of isolation of metals",
                "Hydrogen",
                "s-Block elements (alkali and alkaline earth metals)",
                "p-Block elements group 13 to group 18",
                "d- and f-block elements",
                "Co-ordination compounds",
                "Purification and characterization of organic compounds",
                "Basic principles of organic chemistry",
                "Hydrocarbons classification",
                "Isomerism",
                "IUPAC nomenclature",
                "General methods of preparation, properties, and reactions",
                "Organic compounds containing Halogens",
                "Organic compounds containing Oxygen",
                "Organic compounds containing Nitrogen",
                "Polymers (introduction, classification, and polymerization methods)",
            ],
        },
    ];
    return (

        <div>
         
            <div data-spy="scroll" data-target=".site-navbar-target" data-offset="300">

                <div className="site-wrap">
                   
                    <div className="site-section ftco-subscribe-1 site-blocks-cover pb-4" style={{ backgroundImage: "url('/bg_1.jpg')" }}>
                        <div className="container">
                            <div className="row align-items-end">
                                <div className="col-lg-7">
                                    <h2 className="mb-0">Syllabus</h2>
                                    <p>Explore the detailed syllabus designed to prepare you for aviation CET exams.</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="custom-breadcrumns border-bottom">
                        <div className="container">
                            <a href="/">Home</a>
                            <span className="mx-3 icon-keyboard_arrow_right"></span>
                            <span className="current">Syllabus</span>
                        </div>
                    </div>
                    <div className="site-section">
                        <div className="container">



                            <div className=" mr-auto align-self-center order-2 order-lg-1">
                                <h2 className="section-title-underline mb-5">
                                    <span>Aviation CET Exam Syllabus</span>
                                </h2>
                                <div className="row">
                                    {syllabus.map((item, index) => (
                                        <div key={index} className="col-lg-12 mb-4">
                                            <div className="card shadow-sm rounded-lg">
                                                <div className="card-body">
                                                    <h3 className="card-title mb-3">{item.subject}</h3>
                                                    <div className="topics">
                                                        {item.topics.map((topic, idx) => (
                                                            <div key={idx} className="topic-item mb-2">
                                                                <span className="badge bg-blue me-2">{idx + 1}</span>&nbsp;&nbsp;
                                                                {topic}
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>




                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SyllabusPage;
