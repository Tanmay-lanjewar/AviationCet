import React, { useState } from "react";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false); // loader state

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");


        if (!email) {
            setMessage("Please enter a valid email address.");
            return;
        }
        setLoading(true); // start loading
        
        try {
            const response = await fetch("https://skydome-backend-6cky.onrender.com/forgot-password", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });
            if (!email) {
                setMessage("Please enter a valid email address.");
                return;
            }
            
            const result = await response.json();
            if (response.ok) {
                setMessage("A password reset link has been sent to your email.");
            } else {
                setMessage(result.error || "Something went wrong. Please try again.");
            }
        } catch (error) {
            setMessage("Error: Unable to process your request.");
        }

        setLoading(false); // end loading
    };

    return (
        <div className="site-section" style={{ marginTop: "5rem" }}>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-5">
                    <div className="forgot-password-container">
                        <h3 className="section-title-underline" id="mb-3">
                            <span>Forgot Password</span>
                        </h3>
                        <form onSubmit={handleSubmit} className="forgot-password-form">
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="form-control fl"
                                    disabled={loading}
                                />
                            </div>
                            <button type="submit" className="btn bg-blue" disabled={loading}>
                                {loading ? "Sending..." : "Send Reset Link"}
                            </button>
                        </form>
                        {message && <p className="message mt-3">{message}</p>}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default ForgotPassword;
