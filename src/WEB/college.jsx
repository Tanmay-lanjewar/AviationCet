import React from "react";
import "./SkydomeAviationPage.css";
import skydomeLogo from "/logo3.png"; // use your uploaded logo/image path

// import facilityImage from "/assets/facility.jpg"; // replace with your facility photo path

const SkydomeAviationPage = () => {
  return (
    
    <div className="skydome-container">
      <section className="skydome-hero">
  <div className="skydome-hero-overlay">
    <h1 className="skydome-hero-title">Welcome to Skydome Aviation Institute</h1>
    <p className="skydome-hero-subtitle">Your Gateway to Aviation Excellence</p>
  </div>
</section>

      <header className="skydome-header">
        <img src={skydomeLogo} alt="Skydome Aviation" className="skydome-logo" />
        <h1 className="skydome-title">SKYDOME AVIATION INSTITUTE</h1>
      </header>

      <section className="skydome-about">
        <h2>Why Choose Us</h2>
        <ul>
          <li>Industry-Driven Curriculum</li>
          <li>Expert Trainers with Real-World Experience</li>
          <li>Personalized Skill Development</li>
          <li>State-of-the-Art Training Facilities</li>
          <li>Global Placement Opportunities</li>
          <li>Soft Skills & Leadership Training</li>
          <li>Career Support & Mentorship</li>
        </ul>
      </section>

      <section className="skydome-courses">
        <h2>Courses Offered</h2>
        <p>1. Cabin Crew<br/>2. Airport Management<br/>3. Aviation Hospitality</p>
      </section>

      <section className="skydome-eligibility">
        <h2>Eligibility Criteria</h2>
        <ul>
          <li>10+2/Diploma or currently pursuing Graduation (1st/2nd year)</li>
          <li>Age: 17 to 24 years</li>
          <li>Height: Minimum 155 cm</li>
          <li>Appearance: Well groomed, clear skin, no visible scars/tattoos</li>
          <li>Communication: Fluent in Hindi & English</li>
        </ul>
      </section>

      <section className="skydome-fees">
        <h2>Fee Structure (1 Year)</h2>
        <ul>
          <li>Admission Form: ₹500</li>
          <li>Registration & Admission: ₹20,000</li>
          <li>Tuition Fee (1st Semester): ₹40,000</li>
          <li>Tuition Fee (2nd Semester): ₹40,000</li>
          <li><strong>Total: ₹1,00,500</strong></li>
          <li><em>Food & Accommodation: ₹50,000/semester (Extra)</em></li>
        </ul>
        {/* Fees Structure Button */}
      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <a
          href="/FEE Structure.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="fees-button"
          style={{
            padding: '12px 24px',
            backgroundColor: '#004d80',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            textDecoration: 'none',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
        >
          View Fees Structure
        </a>
      </div>
      </section>

      <section className="skydome-testimonials">
        <h2>Student Testimonials</h2>
        <blockquote>
          "The hands-on training and expert guidance helped me land my dream airline job!"<br/>
          <cite>- Ananya Sharma, Cabin Crew at Air India</cite>
        </blockquote>
        <blockquote>
          "I gained confidence and industry knowledge to pursue my dream. Thank you Skydome!"<br/>
          <cite>- Disha Kapoor, Cabin Crew Trainee</cite>
        </blockquote>
      </section>
      <section className="skydome-gallery">
  <h2>Campus Life at Skydome</h2>
  <div className="skydome-gallery-grid">
  <img src="\college2.jpeg" alt="Campus 1" className="skydome-gallery-img" />
    <img src="college3.jpeg" alt="Campus 2" className="skydome-gallery-img" />
    <img src="college4.jpeg" alt="Campus 3" className="skydome-gallery-img" />
    <img src="college5.jpeg" alt="Campus 4" className="skydome-gallery-img" />
  </div>
</section>


      <footer className="skydome-footer">
        <p>Address: Plot No - Ps4, Bestech City Plots, Sector-7, Dharuhera, Haryana</p>
        <p>Email: skydomeaviation@gmail.com | Website: <a href="http://www.skydomeaviation.com" target="_blank" rel="noopener noreferrer">skydomeaviation.com</a></p>
      </footer>

       {/* Google Map Embed */}
       <div style={{ marginTop: '3rem', textAlign: 'center' }}>
        <h2 style={{color:"#004d80"}}>Our Location</h2>
        <div style={{ maxWidth: '100%', overflow: 'hidden' }}>
          <iframe
            title="Skydome Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.2231581983266!2d73.84701711535274!3d18.520430287400846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c06b6e5cb35d%3A0x5f69bb0d9f69e8e6!2sSkydome%20Aviation!5e0!3m2!1sen!2sin!4v1683456789012"
            width="100%"
            height="400"
            style={{ border: 0, borderRadius: '12px' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default SkydomeAviationPage;
