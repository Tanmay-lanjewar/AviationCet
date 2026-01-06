import React from 'react';
import './ExploreSkydome.css';
import { useNavigate } from 'react-router-dom';

const ExploreSkydome = () => {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/our-college'); // Change '/about' to your target route
  };

  return (
    <div id="explore-skydome-section" className="explore-skydome-container">
      <h2 className="explore-skydome-heading">Explore About Our College – Skydome Aviation Institute</h2>
      <div className="explore-skydome-content">
        {/* Left side - Text and Button */}
        <div className="explore-skydome-text">
          <p>
            At Skydome Aviation Institute, we are committed to excellence in aviation education and practical training.
            Our programs are designed to equip students with industry-relevant knowledge, real-world flying experience,
            and career support. Join us and take your passion for aviation to the skies.
          </p>
          <button style={{background:"#295ca7"}} className="explore-skydome-btn" onClick={handleExploreClick}>
            Learn More
          </button>
        </div>

        {/* Right side - Image */}
        <div className="explore-skydome-image">
          <img src="/logo1.png" alt="Skydome Aviation Institute" />
        </div>
      </div>
      <br></br>
      <br></br>
    </div>
  
  );
};

export default ExploreSkydome;
