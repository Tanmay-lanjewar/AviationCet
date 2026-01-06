import React, { useState } from "react";

const PreferencesForm = ({ formData, handleInputChange, stepErrors }) => {
  return (
    <div>
      <h4 className="content-title">Step 2: Select your preferences</h4>
      <p className="content-description">
        Choose your preferences for the exam, such as date and location.
      </p>
      <br />
      <form>
        <div className="container">
          <div className="row">
            {/* Qualification */}
            <div className="col-md-6 form-group">
              <label htmlFor="qualification">
                Please select your Qualification
              </label>
              <select
                id="qualification"
                className="fl form-control form-control-lg small-font"
                name="qualification"
                value={formData.qualification}
                onChange={handleInputChange}
                required
              >
                <option value="">Please select your qualification</option>
                <option value="10">10th</option>
                <option value="12pcma">12th with PCM Appearing</option>
                <option value="12pcm">12th with PCM</option>
                <option value="12pcba">12th with PCB/IT Appearing</option>
                <option value="12pcb">12th with PCB/IT</option>
                <option value="12nonpcma">12th with Non-PCM Appearing</option>
                <option value="12nonpcm">12th with Non-PCM</option>
                <option value="diploma">Diploma</option>
                <option value="btech">B.Tech/BE/Higher</option>
              </select>
              {stepErrors?.qualification && <span className="error-text">{stepErrors.qualification}</span>}
            </div>
          </div>

          {/* Class X Details */}
          {(formData.qualification === "10" ||
            formData.qualification === "diploma" ||
            formData.qualification === "btech" ||
            formData.qualification === "12nonpcma" ||
            formData.qualification === "12nonpcm" ||
            formData.qualification === "12pcb" ||
            formData.qualification === "12pcba" ||
            formData.qualification === "12pcm" ||
            formData.qualification === "12pcma") && (
            <div className="class10">
              <h5
                className="section-header"
                style={{
                  textDecoration: "underline",
                  textDecorationColor: "rgb(25, 126, 214)",
                }}
              >
                Class X Details
              </h5>
              <div className="row">
                <div className="col-md-6 form-group">
                  <label htmlFor="classXBoard">Class X Board</label>
                  <input
                    type="text"
                    id="classXBoard"
                    className="fl form-control form-control-lg"
                    name="classXBoard"
                    value={formData.classXBoard}
                    onChange={handleInputChange}
                    placeholder="Board Name"
                    required
                  />
                   {stepErrors?.classXBoard && <span className="error-text">{stepErrors.classXBoard}</span>}
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="classXPassingYear">Passing Year</label>
                  <select
                    id="classXPassingYear"
                    className="fl form-control form-control-lg small-font"
                    name="classXPassingYear"
                    value={formData.classXPassingYear}
                    onChange={handleInputChange}
                    required
                  >
                    
                    <option value="">Select Passing Year</option>
                    {[...Array(16)].map((_, i) => {
                      const year = new Date().getFullYear() - i;
                      return (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      );
                    })}
                  </select>
                  {stepErrors?.classXPassingYear && <span className="error-text">{stepErrors.classXPassingYear}</span>}
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 form-group">
                  <label htmlFor="classXSchoolName">
                    Class X School Name & Address
                  </label>
                  <input
                    type="text"
                    id="classXSchoolName"
                    className="fl form-control form-control-lg"
                    name="classXSchoolName"
                    value={formData.classXSchoolName}
                    onChange={handleInputChange}
                    placeholder="School Name & Address"
                    required
                  />
                   {stepErrors?.classXSchoolName && <span className="error-text">{stepErrors.classXSchoolName}</span>}
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="classXPercentage">Class X Percentage</label>
                  <input
                    type="number"
                    id="classXPercentage"
                    className="fl form-control form-control-lg"
                    name="classXPercentage"
                    value={formData.classXPercentage}
                    onChange={handleInputChange}
                    placeholder="Percentage"
                    required
                    min="0"
                    max="100"
                    step="0.01"
                  />
                      {stepErrors?.classXPercentage && <span className="error-text">{stepErrors.classXPercentage}</span>}
                </div>
              </div>
            </div>
          )}

          {/* Class XII Details */}
          {(formData.qualification === "12pcma" ||
            formData.qualification === "12pcm" ||
            formData.qualification === "12pcba" ||
            formData.qualification === "12pcb" ||
            formData.qualification === "12nonpcm" ||
            formData.qualification === "12nonpcma" ||
            formData.qualification === "btech") && (
            <div className="class12">
              <h5
                className="section-header"
                style={{
                  textDecoration: "underline",
                  textDecorationColor: "rgb(25, 126, 214)",
                }}
              >
                Class XII Details
              </h5>
              <div className="row">
                <div className="col-md-6 form-group">
                  <label htmlFor="classXIIBoard">Class XII Board</label>
                  <input
                    type="text"
                    id="classXIIBoard"
                    className="fl form-control form-control-lg"
                    name="classXIIBoard"
                    value={formData.classXIIBoard}
                    onChange={handleInputChange}
                    placeholder="Board Name"
                    required
                  />
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="classXIIPassingYear">Passing Year</label>
                  <select
                    id="classXIIPassingYear"
                    className="fl form-control form-control-lg small-font"
                    name="classXIIPassingYear"
                    value={formData.classXIIPassingYear}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Passing Year</option>
                    {[...Array(16)].map((_, i) => {
                      const year = new Date().getFullYear() - i;
                      return (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 form-group">
                  <label htmlFor="classXIISchoolName">
                    Class XII School Name & Address
                  </label>
                  <input
                    type="text"
                    id="classXIISchoolName"
                    className="fl form-control form-control-lg"
                    name="classXIISchoolName"
                    value={formData.classXIISchoolName}
                    onChange={handleInputChange}
                    placeholder="School Name & Address"
                    required
                  />
                </div>
              </div>
            </div>
          )}

          {/* Diploma Details */}
          {formData.qualification === "diploma" && (
            <div className="diploma">
              <h5
                className="section-header"
                style={{
                  textDecoration: "underline",
                  textDecorationColor: "rgb(25, 126, 214)",
                }}
              >
                Diploma Details
              </h5>
              <div className="row">
                <div className="col-md-6 form-group">
                  <label htmlFor="universityBoard">Board/University</label>
                  <input
                    type="text"
                    id="universityBoard"
                    className="fl form-control form-control-lg"
                    name="universityBoard"
                    value={formData.universityBoard}
                    onChange={handleInputChange}
                    placeholder="Board/University"
                    required
                  />
                </div>
                <div className="col-md-6 form-group">
                  <label htmlFor="polytechnicPassingYear">Passing Year</label>
                  <select
                    id="polytechnicPassingYear"
                    className="fl form-control form-control-lg small-font"
                    name="polytechnicPassingYear"
                    value={formData.polytechnicPassingYear}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Passing Year</option>
                    {[...Array(16)].map((_, i) => {
                      const year = new Date().getFullYear() - i;
                      return (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      );
                    })}
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 form-group">
                  <label htmlFor="polytechnicCollegeName">
                    Polytechnic College Name & Address
                  </label>
                  <input
                    type="text"
                    id="polytechnicCollegeName"
                    className="fl form-control form-control-lg"
                    name="polytechnicCollegeName"
                    value={formData.polytechnicCollegeName}
                    onChange={handleInputChange}
                    placeholder="College Name & Address"
                    required
                  />
                </div>
              </div>
            </div>
          )}
        </div>
        <h5
          style={{
            marginBottom: "7px",
            textAlign: "left",
            textDecoration: "underline",
          }}
        >
          Course Selection
        </h5>
        <div className="row" id="course-priority" style={{ display: "flex" }}>
          {/* <div className="col col-12 label-adjust">
        <label>Please select your Course Priority</label>
      </div> */}

          <div className="col form-group col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
            <label htmlFor="course-priority1">Course Priority 1</label>
            <select
              className=" form-control form-control-lg fl small-font"
              name="priority1"
              id="course-priority1"
              value={formData.priority1}
              onChange={handleInputChange}
            >
              <option value="">Select 1st course preference</option>
              <optgroup label="Licence">
                <option value="pilot">Pilot</option>
                <option value="ame-dgca">AME (DGCA)</option>
                <option value="ame-easa">AME (EASA)</option>
              </optgroup>
              <optgroup label="Engineering">
                <option value="aeronautical-engg">
                  Aeronautical Engineering
                </option>
                <option value="aerospace-engg">Aerospace Engineering</option>
                <option value="integrated-program">
                  Integrated Program (Aeronautical + AME) (Aerospace + AME)
                </option>
              </optgroup>
              <optgroup label="Graduation">
                <option value="bba-aviation">BBA in Aviation Management</option>
                <option value="bsc-aeronautical">
                  MBA in Aviation Management
                </option>
              </optgroup>
              <optgroup label="Certification">
                <option value="cabin-crew">Cabin Crew</option>
                <option value="airport-management">Airport Management</option>
                <option value="ground-staff">Ground Staff</option>
              </optgroup>
            </select>
            {stepErrors?.course_priority1 && (
              <span className="error-text">{stepErrors.course_priority1}</span>
            )}
          </div>

          <hr />

          <div className="col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 ">
            <label htmlFor="course-priority2">Course Priority 2</label>

            <select
              className="form-control form-control-lg fl small-font"
              id="course-priority2"
              name="priority2"
              value={formData.priority2}
              onChange={handleInputChange}
            >
              <option value="">Select 2nd course preference</option>
              <optgroup label="Licence">
                <option value="pilot">Pilot</option>
                <option value="ame-dgca">AME (DGCA)</option>
                <option value="ame-easa">AME (EASA)</option>
              </optgroup>
              <optgroup label="Engineering">
                <option value="aeronautical-engg">
                  Aeronautical Engineering
                </option>
                <option value="aerospace-engg">Aerospace Engineering</option>
                <option value="integrated-program">
                  Integrated Program (Aeronautical + AME) (Aerospace + AME)
                </option>
              </optgroup>
              <optgroup label="Graduation">
                <option value="bba-aviation">BBA in Aviation Management</option>
                <option value="bsc-aeronautical">
                  MBA in Aviation Management
                </option>
              </optgroup>
              <optgroup label="Certification">
                <option value="cabin-crew">Cabin Crew</option>
                <option value="airport-management">Airport Management</option>
                <option value="ground-staff">Ground Staff</option>
              </optgroup>
            </select>
            {stepErrors?.course_priority2 && (
              <span className="error-text">{stepErrors.course_priority2}</span>
            )}
          </div>

          <hr />

          <div className="col col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
            <label htmlFor="course-priority3">Course Priority 3</label>

            <select
              className="form-control form-control-lg fl small-font"
              name="priority3"
              id="course-priority3"
              value={formData.priority3}
              onChange={handleInputChange}
            >
              <option value="">Select 3rd course preference</option>
              <optgroup label="Licence">
                <option value="pilot">Pilot</option>
                <option value="ame-dgca">AME (DGCA)</option>
                <option value="ame-easa">AME (EASA)</option>
              </optgroup>
              <optgroup label="Engineering">
                <option value="aeronautical-engg">
                  Aeronautical Engineering
                </option>
                <option value="aerospace-engg">Aerospace Engineering</option>
                <option value="integrated-program">
                  Integrated Program (Aeronautical + AME) (Aerospace + AME)
                </option>
              </optgroup>
              <optgroup label="Graduation">
                <option value="bba-aviation">BBA in Aviation Management</option>
                <option value="bsc-aeronautical">
                  MBA in Aviation Management
                </option>
              </optgroup>
              <optgroup label="Certification">
                <option value="cabin-crew">Cabin Crew</option>
                <option value="airport-management">Airport Management</option>
                <option value="ground-staff">Ground Staff</option>
              </optgroup>
            </select>
            {stepErrors?.course_priority3 && (
              <span className="error-text">{stepErrors.course_priority3}</span>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default PreferencesForm;
