import React, { useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ResetPassword = () => {
    const { token } = useParams();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
    const navigate = useNavigate();

    const validatePassword = (password) => {
        const errors = [];
        if (password.length < 8) errors.push("Password must be at least 8 characters.");
        if (!/[A-Za-z]/.test(password)) errors.push("Password must contain at least one letter.");
        if (!/\d/.test(password)) errors.push("Password must contain at least one number.");
        if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) errors.push("Password must contain at least one special character.");
        return errors;
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const toggleConfirmPasswordVisibility = () => {
        setConfirmPasswordVisible(!confirmPasswordVisible);
    };

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);

        const validationErrors = validatePassword(newPassword);
        if (validationErrors.length > 0) {
            toast.error(validationErrors.join(' '));
        }
    };

    const handleConfirmPasswordChange = (e) => {
        const newConfirmPassword = e.target.value;
        setConfirmPassword(newConfirmPassword);

        if (newConfirmPassword !== password) {
            toast.error("Passwords do not match.");
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validatePassword(password);
        if (validationErrors.length > 0) {
            setMessage(validationErrors.join(" "));
            return;
        }

        if (password !== confirmPassword) {
            toast.error("Passwords do not match.");
            return;
        }



        try {
            const response = await fetch(`https://skydome-backend-6cky.onrender.com/reset-password/${token}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ password }), // Only send password as confirmPassword isn't needed in the backend
            });

            if (response.ok) {
                toast.success("Password reset successful!");
                setPassword('');
                setConfirmPassword('');
                navigate('/login'); // Redirect to login page after successful password reset
                setTimeout(() => {
                    navigate('/login');
                }, 2000); 
            } else {
                const result = await response.json();
                toast.error(result.message || "An error occurred.");
            }
        } catch (error) {
            console.error("Error during password reset:", error);
            toast.error("Failed to reset password. Please try again later.");
        }
    };

    return (
        <div className="site-section" style={{ marginTop: "5rem" }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <div className="forgot-password-container">
                            <h3 className="section-title-underline" id="mb-3"><span>Reset Password</span></h3>
                            <form onSubmit={handleSubmit}>
                                <label htmlFor='password'>New Password:</label>
                                <input
                                    id="password"
                                    type={passwordVisible ? "text" : "password"}
                                    value={password}
                                    onChange={handlePasswordChange}
                                    className="form-control fl"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    style={{
                                        position: "absolute",
                                        right: "30px",  // Adjust the position of the button
                                        top: "43%",  // Vertically center the button
                                        transform: "translateY(-50%)", // Vertically center the button more precisely
                                        background: "transparent",
                                        border: "none",
                                        outline: "none",
                                        fontSize: "14px",
                                        color: "#007bff",
                                        cursor: "pointer",
                                        zIndex: 1, // Ensure the button is above other elements
                                    }}
                                >
                                    {passwordVisible ? "Hide" : "Show"}
                                </button>
                                <label htmlFor='confirmPassword' className='mt-3'>Confirm New Password:</label>
                                <input
                                    id="confirmPassword"
                                    type={confirmPasswordVisible ? "text" : "password"}
                                    value={confirmPassword}
                                    onChange={handleConfirmPasswordChange}
                                    className="form-control fl"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={toggleConfirmPasswordVisibility}
                                    style={{
                                        position: "absolute",
                                        right: "30px",  // Adjust the position of the button
                                        top: "75%",  // Vertically center the button
                                        transform: "translateY(-50%)", // Vertically center the button more precisely
                                        background: "transparent",
                                        border: "none",
                                        outline: "none",
                                        fontSize: "14px",
                                        color: "#007bff",
                                        cursor: "pointer",
                                        zIndex: 1, // Ensure the button is above other elements
                                    }}
                                >
                                    {confirmPasswordVisible ? "Hide" : "Show"}
                                </button>
                                <button type="submit" className="btn bg-blue mt-3">Reset Password</button>
                            </form>
                            {message && <p className="message">{message}</p>}
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer /> {/* Add ToastContainer to display toasts */}
        </div>
    );
};

export default ResetPassword;
