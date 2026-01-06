import React, { useState } from 'react';

const PersonalDetailsForm = ({ formData, handleInputChange, stepErrors }) => {
  return (
    <div>
      <h4 className="content-title">Step 1: Fill in your personal details</h4>
      <p className="content-description">
        Provide your name, email, and other personal information.
      </p>
      <br />
      <form>
        <div className="row">
          {/* First Name */}
          <div className="col-md-6 form-group">
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              id="fname"
              className="fl form-control form-control-lg"
              name="fname"
              value={formData.fname}  // Bind value to formData
              onChange={handleInputChange}
              placeholder="First Name"
            />
            {stepErrors?.f_name && <span className="error-text">{stepErrors.f_name}</span>}
          </div>
          {/* Last Name */}
          <div className="col-md-6 form-group">
            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              className="fl form-control form-control-lg"
              name="lname"
              value={formData.lname}
              onChange={handleInputChange}
              placeholder="Last Name"
            />
             {stepErrors?.l_name && <span className="error-text">{stepErrors.l_name}</span>}
          </div>
        </div>

        <div className="row">
          {/* Email Address */}
          <div className="col-md-6 form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="text"
              id="email"
              className="fl form-control form-control-lg"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Email"
            />
             {stepErrors?.email && <span className="error-text">{stepErrors.email}</span>}
          </div>
          {/* Mobile Number */}
          <div className="col-md-6 form-group">
            <label htmlFor="number">Mobile Number</label>
            <input
              type="text"
              id="number"
              className="fl form-control form-control-lg"
              name="number"
              value={formData.number}
              onChange={handleInputChange}
              placeholder="Mobile Number"
            />
             {stepErrors?.number && <span className="error-text">{stepErrors.number}</span>}
          </div>
          {/* Date of Birth */}
          <div className="col-md-6 form-group">
            <label htmlFor="dob">Date of Birth</label>
            <input
              type="date"
              id="dob"
              className="fl form-control form-control-lg"
              name="dob"
              value={formData.dob} // Binding form data
              onChange={handleInputChange}
            />
             {stepErrors?.dob && <span className="error-text">{stepErrors.dob}</span>}
          </div>
          {/* Category */}
          <div className="col-md-6 form-group">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              className="fl form-control form-control-lg"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
            >
              <option value="">Select Category</option>
              <option value="General">General</option>
              <option value="OBC">OBC</option>
              <option value="SC/ST">SC/ST</option>
              <option value="Other">Others</option>
            </select>
            {stepErrors?.category && <span className="error-text">{stepErrors.category}</span>}
          </div>
          {/* Gender */}
          <div className="col-md-6 form-group">
            <label htmlFor="gender">Gender</label>
            <select
              id="gender"
              className="fl form-control form-control-lg"
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
            {stepErrors?.gender && <span className="error-text">{stepErrors.gender}</span>}
          </div>
          {/* Father's Name */}
          <div className="col-md-6 form-group">
            <label htmlFor="fatherName">Father's Name</label>
            <input
              type="text"
              id="fatherName"
              className="fl form-control form-control-lg"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleInputChange}
              placeholder="Father's Name"
            />
             {stepErrors?.father_name && <span className="error-text">{stepErrors.father_name}</span>}
          </div>
          {/* Mother's Name */}
          <div className="col-md-6 form-group">
            <label htmlFor="motherName">Mother's Name</label>
            <input
              type="text"
              id="motherName"
              className="fl form-control form-control-lg"
              name="motherName"
              placeholder="Mother's Name"
              value={formData.motherName}
              onChange={handleInputChange}
            />
             {stepErrors?.mother_name && <span className="error-text">{stepErrors.mother_name}</span>}
          </div>
          {/* Parent's Mobile */}
          <div className="col-md-6 form-group">
            <label htmlFor="parentMobile">Parent's Mobile Number</label>
            <input
              type="text"
              id="parentMobile"
              className="fl form-control form-control-lg"
              name="parentMobile"
              placeholder="Parent's Mobile Number"
              value={formData.parentMobile}
              onChange={handleInputChange}
            />
             {/* {stepErrors?.parent_mobile && (
              <span className="error-text">{stepErrors.parent_mobile}</span>
            )} */}
          </div>
          {/* Parent's Email */}
          <div className="col-md-6 form-group">
            <label htmlFor="parentEmail">Parent's Email</label>
            <input
              type="email"
              id="parentEmail"
              className="fl form-control form-control-lg"
              name="parentEmail"
              placeholder="Parent's Email"
              value={formData.parentEmail}
              onChange={handleInputChange}
            />
            {/* {stepErrors?.parent_email && (
              <span className="error-text">{stepErrors.parent_email}</span>
            )} */}
          </div>
          {/* Address */}
          <div className="col-md-6 form-group">
            <label htmlFor="address">Address</label>
            <textarea
              id="address"
              className="fl form-control form-control-lg"
              name="address"
              placeholder="Enter your address"
              value={formData.address}
              onChange={handleInputChange}
            />
            {stepErrors?.address && <span className="error-text">{stepErrors.address}</span>}
          </div>
          {/* City */}
          <div className="col-md-6 form-group">
            <label htmlFor="city">City</label>
            <input
              type="text"
              id="city"
              className="fl form-control form-control-lg"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleInputChange}
            />
             {stepErrors?.city && <span className="error-text">{stepErrors.city}</span>}
          </div>
          {/* State */}
          <div className="col-md-6 form-group">
            <label htmlFor="state">State</label>
            <input
              type="text"
              id="state"
              className="fl form-control form-control-lg"
              name="state"
              placeholder="State"
              value={formData.state}
              onChange={handleInputChange}
            />
            {stepErrors?.state && <span className="error-text">{stepErrors.state}</span>}
          </div>
          {/* Country */}
          <div className="col-md-6 form-group">
            <label htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              className="fl form-control form-control-lg"
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleInputChange}
            />
            {stepErrors?.country && <span className="error-text">{stepErrors.country}</span>}
          </div>
          {/* PIN */}
          <div className="col-md-6 form-group">
            <label htmlFor="pin">PIN Code</label>
            <input
              type="text"
              id="pin"
              className="fl form-control form-control-lg"
              name="pin"
              placeholder="PIN Code"
              value={formData.pin}
              onChange={handleInputChange}
            />
            {stepErrors?.pin && <span className="error-text">{stepErrors.pin}</span>}
          </div>
        </div>
      </form>
    </div>
  );
};

export default PersonalDetailsForm;
