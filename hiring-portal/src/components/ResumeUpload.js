

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const ResumeUpload = () => {
  const [resume, setResume] = useState(null);
  const navigate = useNavigate();

  const handleResumeChange = (e) => {
    setResume(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (resume) {
      const reader = new FileReader();
      reader.onloadend = () => {
        localStorage.setItem('resumeData', reader.result);
        navigate('/candidate-form');
      };
      reader.readAsDataURL(resume);
    } else {
      alert('Please upload a resume');
    }
  };

  return (
    <div className="resume-upload">
      <h2 className="text-center">Upload Your Resume</h2>
      <div className="upload-box">
        <form onSubmit={handleSubmit}>
          <input type="file" onChange={handleResumeChange} required />
          {resume && <p>{resume.name}</p>}
          <button type="submit" className="btn btn-primary">
            Upload
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResumeUpload;
