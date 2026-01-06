import React, { useState ,useEffect } from "react";
import "./RegistrationPage.css"; 
import PersonalDetailsForm from "./PersonalDetailsForm";
import CandidatePhotographForm from "./CandidatePhotographForm";
import PreferencesForm from "./PreferencesForm";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import Payment_page from "./Payment_page";
import Ending_page from "./Ending_page";



const RegistrationPage = () => {
  const [candidateData, setCandidateData] = useState({});
  const isAuth = useSelector((state) => state.auth.isAuth);
  const [currentStep, setCurrentStep] = useState(1);
   const [loading, setLoading] = useState(false);
   const [imageSize, setimageSize] = useState(0);
  
 

  const [formData, setFormData] = useState({
    login_email:"",
    fname: "",
    lname: "",
    email: "",
    number: "",
    dob: "",
    category: "",
    gender: "",
    fatherName: "",
    motherName: "",
    parentMobile: "",
    parentEmail: "",
    address: "",
    city: "",
    state: "",
    country: "",
    pin: "",
    qualification: "",
    classXBoard: "",
    classXPassingYear: "",
    classXSchoolName: "",
    classXPercentage: "",
    classXIIBoard: "",
    classXIIPassingYear: "",
    classXIISchoolName: "",
    universityBoard: "",
    polytechnicPassingYear: "",
    polytechniccollegeName: "",
    photo: "",
        priority1: "",
        priority2: "",
        priority3: "",
      
  });
  const [paymentData, setPaymentData] = useState({
    payment_id: "",
    login_email: "",
    amount: "",
    order_id: "",
    status
  });
  const totalSteps = 5; // Adjust this value for the number of steps.
  const [stepErrors, setStepErrors] = useState({}); // Initialize stepErrors

  const validateCurrentStep = () => {
    const stepErrors = {}; // Reset errors
  
    console.log("Current Step:", currentStep);
    console.log("Form Data:", formData);
  
    const nameRegex = /^[A-Za-z\s]{2,}$/; // Allows only letters and spaces, min 2 characters
    const emailRegex = /^\S+@\S+\.\S+$/; // Standard email validation
    const mobileRegex = /^\d{10}$/; // Exactly 10 digits for mobile numbers
    const pinRegex = /^\d{6}$/; // Exactly 6 digits for PIN codes
  
    if (currentStep === 1) {
      if (!formData.fname || !nameRegex.test(formData.fname))
        stepErrors.f_name = "Enter the First Name.";
      
      if (!formData.lname || !nameRegex.test(formData.lname))
        stepErrors.l_name = "Enter the Last Name.";
      
      if (!formData.fatherName || !nameRegex.test(formData.fatherName))
        stepErrors.father_name = "Enter the Father's Name.";
      
      if (!formData.motherName || !nameRegex.test(formData.motherName))
        stepErrors.mother_name = "Enter the Mother's Name.";
      
      if (!formData.email || !emailRegex.test(formData.email))
        stepErrors.email = "Valid Email is required.";
      
      if (!formData.number || !mobileRegex.test(formData.number))
        stepErrors.number = "Valid Mobile Number is required (10 digits).";
  
      if (!formData.dob) stepErrors.dob = "Date of Birth is required.";
      if (!formData.category) stepErrors.category = "Category is required.";
      if (!formData.gender) stepErrors.gender = "Gender is required.";
  
      
  
      if (!formData.address) stepErrors.address = "Address is required.";
      if (!formData.city) stepErrors.city = "City is required.";
      if (!formData.state) stepErrors.state = "State is required.";
      if (!formData.country) stepErrors.country = "Country is required.";
  
      if (!formData.pin || !pinRegex.test(formData.pin))
        stepErrors.pin = "Valid PIN Code is required (6 digits).";
    }
  
    if (currentStep === 2) {
      if (!formData.qualification) stepErrors.qualification = "Qualification is required.";
      if (!formData.classXBoard) stepErrors.classXBoard = "Class X Board is required.";
      if (!formData.classXPassingYear) stepErrors.classXPassingYear = "Passing Year is required.";
      if (!formData.classXSchoolName) stepErrors.classXSchoolName = "Class X School Name is required.";
      if (!formData.classXPercentage) stepErrors.classXPercentage = "Class X Percentage is required.";
      if (!formData.priority1) stepErrors.course_priority1 = "First course preference is required.";
      if (!formData.priority2) stepErrors.course_priority2 = "Second course preference is required.";
      if (!formData.priority3) stepErrors.course_priority3 = "Third course preference is required.";
    }
  
    if (currentStep === 3) {
      if (!candidateData.image) stepErrors.image = "Photograph is required.";
    }
  
    if (currentStep === 4) {
      if (!formData.payment_id) stepErrors.payment_id = "Payment ID is required.";
    }
  
    console.log("Validation Errors:", stepErrors);
  
    if (Object.keys(stepErrors).length > 0) {
      if(currentStep ==4) alert("make payment first");
      else alert("Please enter all details.");
      setStepErrors(stepErrors); // Update state
      return false;
    }
  
    return true;
  };
  

  const handleNext = async () => {
    if (!validateCurrentStep()) return;

    if (currentStep === 3 && candidateData.image) {   
        console.log("Candidate Data:", candidateData);

          // ✅ Check if file size exceeds 50KB
          const MAX_SIZE = 50 * 1024; // 50KB
          if (imageSize > MAX_SIZE) {
              alert("File size exceeds the limit of 50KB");
              return;
          }

     

        const savedEmail = localStorage.getItem('email');

        // Ensure formData is updated before making the API call
        const updatedFormData = {
            ...formData,
            photo: candidateData.image, 
            login_email: savedEmail
        };

        console.log("Updated Form Data before API call:", updatedFormData);

        setFormData(updatedFormData); // Update state

        try {
            const response = await fetch("https://skydome-backend-6cky.onrender.com/api/save-form-data", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedFormData), // Use the updated object instead of state
            });

            if (response.ok) {
                alert("Your data saved successfully!");
                if (currentStep < totalSteps) setCurrentStep((prevStep) => prevStep + 1);
            } else {
                alert("Failed to save data! Try uploading different image.");
            }
        } catch (error) {
            console.error("Error saving data:", error);
        }
    }

    console.log("Final Form Data:", formData); // Might not have updated values yet

    if (currentStep < totalSteps && currentStep!=3) setCurrentStep((prevStep) => prevStep + 1);
};

 // Fetch user data on mount
 useEffect(() => {
  setCurrentStep(1);
  const savedEmail = localStorage.getItem('email');
  if (!savedEmail) return;

  const fetchUserData = async () => {
    try {
      const userresponse = await fetch(`https://skydome-backend-6cky.onrender.com/api/get-form-data?login_email=${savedEmail}`);
      if (userresponse.ok) {
        const userdata = await userresponse.json();
        console.log("User Data:", userdata);
        if (userdata) {
          setFormData(userdata); // Update form fields with fetched data
          setCandidateData({ image: userdata.photo || "" }); // Set photo in candidateData
          setCurrentStep(4);
        }
       
      }

      
          const paymentresponse = await fetch(`https://skydome-backend-6cky.onrender.com/api/get-payment-data?login_email=${savedEmail}`);
          if (paymentresponse.ok) {
            const paymentdata = await paymentresponse.json();
            console.log("Payment Data:",paymentdata[0]);
            if (paymentdata.length > 0) {
              setPaymentData(paymentdata[0]); // Update form fields with fetched data
              setCurrentStep(5);
            }
          }
      
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  

  fetchUserData();

  
}, []);


  const handlePrev = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handlepaymentcomplete = async (e) => { 
    const savedEmail = localStorage.getItem('email');
    try{
      // ✅ Send request to backend API
    const response = await fetch("https://skydome-backend-6cky.onrender.com/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({login_email: savedEmail }),
         });
          // ✅ Check response
          const data = await response.json();
          if (response.ok) {
            setLoading(false);
            alert("Payment Successfully! Your payment details have been saved!");
            setCurrentStep(5);
          } else {
             alert("Payment verification failed!");
          }
    }
    catch (error) {
      console.error("❌ Error:", error);
  }
    
   
  };
  

  return (
    <div className="registrations">

     
      <div className="custom-breadcrumns border-bottom border-top">
        <div className="container">
          <a href="/">Home</a>
          <span className="mx-3 icon-keyboard_arrow_right"></span>
          <span className="current">Registration</span>
        </div>
      </div>

      {
        isAuth ? (
          <div className="site-section container pt-5" >
          <div className="parent-container ">
            <div className="container1">
              <div className="progress_container">
                <div className="progress1" style={{ maxWidth: "650px", margin: "0 auto" }}>
                  <div
                    className="progress-line"
                    style={{
                      width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%`,
                    }}
                  ></div>
                  {[...Array(totalSteps)].map((_, index) => (
                    <div
                      key={index}
                      className={`circle ${currentStep > index ? "active" : ""}`}
                    >
                      {index + 1}
                    </div>
                  ))}
                </div>
  
              </div>
  
              <div className="content">
                {currentStep === 1 && (
                  <PersonalDetailsForm
                  formData={formData}
                  handleInputChange={handleInputChange}
                  stepErrors={stepErrors}
                  />
                )}
                {currentStep === 2 && (
                  <PreferencesForm 
                  formData={formData}
                  handleInputChange={handleInputChange}
                  stepErrors={stepErrors}
                  />
                )}
                {currentStep === 3 && (                                
                    <CandidatePhotographForm 
                    candidateData={candidateData}
                    setCandidateData={setCandidateData}
                    stepErrors={stepErrors}
                    imageSize={imageSize}
                    setimageSize={setimageSize}
                    />                
                )}
                {currentStep === 4 && (
                <Payment_page
                formData={formData}
                handleInputChange={handleInputChange}
                stepErrors={stepErrors}
                handlepaymentcomplete={handlepaymentcomplete}
                loading={loading}
                setLoading={setLoading}
                />
                )}
                 {currentStep === 5  && (
                <Ending_page
                formData={formData}
                paymentData={paymentData}

                />
                )}
              </div>
  
              <div className="btns">
                <button
                  className="btn-form"
                  onClick={handlePrev}
                  disabled={currentStep === 1 || currentStep===5}
                >
                  Prev
                </button>
                <button
                  className="btn-form"
                  onClick={handleNext}
                  disabled={currentStep === totalSteps}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
        ):
        (
          <div id="unique-login-prompt-wrapper">
          <div id="unique-login-prompt-content">
            <div id="unique-login-prompt-image">
              <img src="/images/logo1.png" alt="Login Illustration" />
            </div>
            <div id="unique-login-prompt-text">
              <h1 id="unique-login-prompt-title">Welcome Back!</h1>
              <p id="unique-login-prompt-message">
                Please log in to continue Registration.
              </p>
              <Link to="/login">
              <button
                id="unique-login-prompt-button"
                
              >
                Login Now
              </button>
              </Link>
            </div>
          </div>
        </div>
        )
      }

    
    </div>


  );
};

export default RegistrationPage;

