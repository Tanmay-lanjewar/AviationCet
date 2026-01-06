import React, { useState } from "react";
import Footer from "./Footer";
import { useAuth } from "../context/AuthContext";
import './Color.css'
const LoginPage = () => {
    const { login } = useAuth(); // Use login function from context
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("https://skydome-backend-6cky.onrender.com/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const data = await response.json();
                setMessage(data.message);
                setError("");
             
                localStorage.setItem("username", data.username);
                localStorage.setItem("email", data.email);
                login(data.user); // Use the login function from context
                window.location.href = "/registration"; // Redirect to home or another page
            } else {
                const errorData = await response.json();
                setError(errorData.message || "Login failed");
                setMessage("");
            }
        } catch (err) {
            setError("Something went wrong. Please try again.");
            setMessage("");
        }
    };
    return (
        <div>
           
            <div data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
                <div className="site-wrap" >
                    
                    <div className="site-section ftco-subscribe-1 site-blocks-cover pb-4" style={{ backgroundImage: "url('/bg_1.jpg')" }}>
                        <div className="container">
                            <div className="row align-items-end ">
                                <div className="col-lg-7">
                                    <h2 className="mb-0">Login</h2>
                                    <p>Welcome back! Please log in to continue.</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="custom-breadcrumns border-bottom">
                        <div className="container">
                            <a href="/">Home</a>
                            <span className="mx-3 icon-keyboard_arrow_right"></span>
                            <span className="current">Login</span>
                        </div>
                    </div>

                    <div className="site-section">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-md-5">
                                    <form onSubmit={handleSubmit}>
                                        <div className="row">
                                            <div className="col-md-12 form-group">
                                                <label htmlFor="username">Email</label>
                                                <input
                                                    type="text"
                                                    id="email"
                                                    name="email"
                                                    className="fl form-control form-control-lg"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>

                                            <div className="col-md-12 form-group">
                                                <label htmlFor="pword">Password</label>
                                                <div style={{ position: "relative", display: "flex", alignItems: "center" }}>
                                                    <input
                                                        type={passwordVisible ? "text" : "password"}
                                                        id="password"
                                                        name="password"
                                                        value={formData.password}
                                                        onChange={handleChange}
                                                        required
                                                        className="fl form-control form-control-lg"
                                                        style={{ paddingRight: "70px" }} // Space for the Show button
                                                    />
                                                    <button
                                                        type="button"
                                                        onClick={togglePasswordVisibility}
                                                        style={{
                                                            position: "absolute",
                                                            right: "10px",
                                                            background: "transparent",
                                                            border: "none",
                                                            outline: "none",
                                                            fontSize: "14px",
                                                            color: "#007bff",
                                                            cursor: "pointer",
                                                        }}
                                                    >
                                                        {passwordVisible ? "Hide" : "Show"}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        {message && <p style={{ color: "green" }}>{message}</p>}
                                        {error && <p style={{ color: "red" }}>{error}</p>}
                                        <div className="row form-group">
                                            <div className="col-12 ">
                                                <a
                                                    href="/forgot-password"
                                                    className="text-blue"
                                                    style={{
                                                        textDecoration: 'underline',
                                                        fontSize: '17px',
                                                        paddingLeft: '0px',
                                                        color: '#0E548E'
                                                    }}
                                                >Forgot Password?
                                                </a><br />
                                                <a
                                                    href="/register"
                                                    className="text-blue"
                                                    style={{
                                                        textDecoration: 'underline',
                                                        fontSize: '17px',
                                                        paddingLeft: '0px',
                                                        color: '#0E548E'
                                                    }}
                                                >Register Now (if you don't have an account)
                                                </a>
                                            </div>
                                        </div>
                                        <div className="row form-group">
                                            <div className="col-12 ">
                                                <input type="submit" value="Log In" className="btn bg-blue btn-lg px-5 " />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );

}
export default LoginPage;





