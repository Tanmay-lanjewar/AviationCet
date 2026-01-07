import { useState, useRef } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
    const navigate = useNavigate();  // Initialize navigate
    const form = useRef();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [otp, setOtp] = useState('');
    const [otpSent, setOtpSent] = useState(false);
    const [loading, setLoading] = useState(false);  // State for loading

  const validatePassword = (password) => {
  return /^\d+$/.test(password);
};


    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

 

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

       

        try {
            const response = await axios.post('https://skydome-backend-6cky.onrender.com/register', { username, email, password, otp });  // ✅ Include OTP
            console.log('Registration successful:', response.data);
            form.current.reset();
            setUsername('');
            setEmail('');
            setPassword('');
            setOtp('');
            setOtpSent(false);
            toast.success("Registered Successfully!!!");
            alert("Registered Successfully!!!");  // ✅ Added alert
            navigate('/login');  // ✅ Corrected redirection
        } catch (err) {
            if (err.response) {
                toast.error(`Registration failed: ${err.response.data}`);
                navigate('/register');  // ✅ Corrected redirection
              
            } else if (err.request) {
                toast.error("No response from server, please try again.");
            } else {
                toast.error(`Error: ${err.message}`);
            }
        }
    };

    // Send OTP to the user's email
    const handleEmailSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);  // Show loading state while sending OTP
        try {
            const response = await axios.post('https://skydome-backend-6cky.onrender.com/send-otp', { email });
            setLoading(false);  // Hide loading state after OTP is sent
            if (response.data.success) {
                setOtpSent(true);
                toast.success('OTP sent to your email!');
            } else {
                toast.error('Failed to send OTP. Please try again.');
            }
        } catch (err) {
            toast.error('Error sending OTP. Please try again.');
        }
    };

    return (
        <div>
            {/* Your existing HTML links */}

            <div className="site-section">
                <div className="container">
                    <div  className="row justify-content-center">
                        <form
  ref={form}
  onSubmit={otpSent ? handleSubmit : handleEmailSubmit}
  className="col-md-5"
>

                            {/* Username, email, and password input */}
                            <div>
                            {loading ? (  // Show loading spinner when loading is true
                                    <div className="col-md-12 form-group text-center">
                                        <div className="spinner-border" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                    </div>
                                ) :otpSent ? (
                                    <div>
                                        <div className="col-md-12 form-group">
                                            <p>*check otp in spam also</p>
                                            <label htmlFor="otp">Enter OTP</label>
                                            <input
                                                type="text"
                                                id="otp"
                                                className="fl form-control form-control-lg unique-otp-input"
                                                value={otp}
                                                onChange={(e) => setOtp(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className="row">
                                            <div className="col-12">
                                                <input type="submit" id="otp_btn" value="Register" className="btn bg-blue btn-lg px-5 unique-verify-otp-btn" />
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    
                                    <div>
                                        <div className="col-md-12 form-group text-center">
                                        <h2 style={{color:"black"}} className="mb-4">Register Now</h2>
                                    </div>
                                        {/* Username, email, and password inputs */}
                                        <div className="col-md-12 form-group">
                                            <label htmlFor="username">Username</label>
                                            <input type="text" id="username" className="fl form-control form-control-lg" value={username} onChange={(e) => setUsername(e.target.value)} required />
                                        </div>
                                        <div className="col-md-12 form-group">
                                            <label htmlFor="email">Email</label>
                                            <input type="email" id="email" className="fl form-control form-control-lg" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                        </div>

                                        <div className="col-md-12 form-group">
                                            <label htmlFor="pword">Password</label>
                                            <div style={{ position: "relative" }}>
                                                <input
                                                    type={passwordVisible ? "text" : "password"}
                                                    id="pword"
                                                    className="fl form-control form-control-lg"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    required
                                                />
                                                <button
                                                    type="button"
                                                    onClick={togglePasswordVisibility}
                                                    style={{ position: "absolute", right: "10px", top: "50%", transform: "translateY(-50%)" }}
                                                    className="unique-password-toggle"
                                                >
                                                    {passwordVisible ? "Hide" : "Show"}
                                                </button>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12">
                                                <input type="submit" id="otp_btn" value="Send OTP" className="btn bg-blue btn-lg px-5 unique-send-otp-btn" />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <ToastContainer />
        </div>
    );
};

export default RegisterPage;
