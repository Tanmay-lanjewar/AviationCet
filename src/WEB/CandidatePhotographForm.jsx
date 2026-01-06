import React from "react";

const CandidatePhotographForm = ({ candidateData, setCandidateData ,stepErrors,setimageSize,imageSize}) => {
  const handleChange = async (e) => {
    const { name, files } = e.target;

    if (name === "image" && files.length > 0) {
      const file = files[0];
      setimageSize(file.size);

      const MAX_SIZE = 50 * 1024; // 50KB
      if (file.size > MAX_SIZE) {
        alert("File size exceeds the limit of 50KB");
        return;
      }
      const formData = new FormData();
      formData.append("image", file);
     
      try {
        const res = await fetch("https://skydome-backend-6cky.onrender.com/api/upload-photo", {
          method: "POST",
          body: formData,
        });
  

          const data = await res.json();

        if (res.ok) {
          console.log("Uploaded file path:", data.filePath);
          // Save the public image URL
          setCandidateData({
            ...candidateData,
            image: `https://skydome-backend-6cky.onrender.com${data.filePath}`,
          });
        } else {
          alert(data.error || "Image upload failed.");
        }
      } catch (err) {
        alert("An error occurred while uploading the image.");
        console.error(err);
      }
    }
  };

  return (
    <div>
      <h4 className="content-title">Step 3: Submit your Photo</h4>
      <p className="content-description">
        Double-check all the details you have provided before submitting.
      </p>
      <form action="#" method="post" id="msform" encType="multipart/form-data">
        <fieldset>
          <div>
            <h4
              className="fs-title"
              style={{ textAlign: "left", marginTop: "50px" }}
            >
              Candidate's Photograph
            </h4>
          </div>

          <div className="row">
            <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
              <div className="form-group label-adjust">
                <label htmlFor="image">Photo</label>
                <input
                  type="file"
                  name="image"
                  id="image"
                  accept="image/x-png,image/jpeg"
                  onChange={handleChange}
                  required
                />
                {stepErrors?.image && (
                  <span className="error-text">{stepErrors.image}</span>
                )}

                {candidateData.image && (
                  <img
                    src={candidateData.image}
                    alt="Preview"
                    style={{ maxWidth: "100px", marginTop: "10px" }}
                  />
                )}
              </div>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default CandidatePhotographForm;