

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Select from 'react-select';
import './styles.css'; // Adjusted path

const languageOptions = [
  { value: 'Java', label: 'Java' },
  { value: 'JavaScript', label: 'JavaScript' },
  { value: 'Angular', label: 'Angular' },
  { value: 'React', label: 'React' },
  { value: 'Python', label: 'Python' },
  { value: 'Go', label: 'Go' }
];

const CandidateForm = () => {
  const [selectedLanguages, setSelectedLanguages] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleLanguageChange = (selectedOptions) => {
    setSelectedLanguages(selectedOptions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className="candidate-form-container">
      <h2 className="section-title">Personal Info</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Name<span className="required">*</span></label>
          <input type="text" className="form-control" required />
        </div>
        <div className="form-group">
          <label className="form-label">Contact No.<span className="required">*</span></label>
          <input type="text" className="form-control" required />
        </div>
        <div className="form-group">
          <label className="form-label">Email<span className="required">*</span></label>
          <input type="email" className="form-control" required />
        </div>
        <div className="form-group">
          <label className="form-label">Current Address</label>
          <input type="text" className="form-control" />
        </div>

        <h2 className="section-title">Educational Background</h2>
        <div className="form-group">
          <label className="form-label">Discipline<span className="required">*</span></label>
          <input type="text" className="form-control" required />
        </div>
        <div className="form-group">
          <label className="form-label">Graduation Year<span className="required">*</span></label>
          <input type="number" className="form-control" required />
        </div>
        <div className="form-group">
          <label className="form-label">University</label>
          <input type="text" className="form-control" />
        </div>

        <h2 className="section-title">Technical Background</h2>
        <div className="form-group">
          <label className="form-label">Give us a little background about yourself and your experience</label>
          <textarea className="form-control" rows="3"></textarea>
        </div>
        <div className="form-group">
          <label className="form-label">Choose the Languages You Have Worked With</label>
          <Select
            isMulti
            options={languageOptions}
            value={selectedLanguages}
            onChange={handleLanguageChange}
            className="language-select"
            classNamePrefix="select"
          />
        </div>

        <div className="form-buttons">
          <button type="button" className="btn btn-secondary">Back</button>
          <button type="submit" className="btn btn-primary">Next</button>
        </div>
      </form>

      {/* Modal */}
      <div className={`modal fade ${showModal ? 'show d-block' : ''}`} tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Thank You</h5>
              <button type="button" className="close" aria-label="Close" onClick={handleClose}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p>The form was submitted successfully.</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" onClick={handleClose}>Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateForm;
















// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Select from 'react-select';
// import './CandidateForm.css';

// const CandidateForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     contactNumber: '',
//     email: '',
//     address: '',
//     discipline: '',
//     graduationYear: '',
//     university: '',
//     technicalBackground: '',
//     languages: []
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   const handleLanguageChange = (selectedOptions) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       languages: selectedOptions
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Store form data in local storage
//     localStorage.setItem('candidateData', JSON.stringify(formData));
//     navigate('/thank-you');
//   };

//   const languageOptions = [
//     { value: 'Java', label: 'Java' },
//     { value: 'JavaScript', label: 'JavaScript' },
//     { value: 'Angular', label: 'Angular' },
//     { value: 'React', label: 'React' }
//   ];

//   return (
//     <form onSubmit={handleSubmit} className="candidate-form">
//       <h2>Personal Info</h2>
//       <div className="form-group">
//         <label>Name<span className="required">*</span></label>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label>Contact No<span className="required">*</span></label>
//         <input
//           type="text"
//           name="contactNumber"
//           value={formData.contactNumber}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label>Email<span className="required">*</span></label>
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label>Current Address</label>
//         <input
//           type="text"
//           name="address"
//           value={formData.address}
//           onChange={handleChange}
//         />
//       </div>

//       <h2>Educational Background</h2>
//       <div className="form-group">
//         <label>Discipline<span className="required">*</span></label>
//         <input
//           type="text"
//           name="discipline"
//           value={formData.discipline}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label>Graduation Year<span className="required">*</span></label>
//         <input
//           type="text"
//           name="graduationYear"
//           value={formData.graduationYear}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label>University</label>
//         <input
//           type="text"
//           name="university"
//           value={formData.university}
//           onChange={handleChange}
//         />
//       </div>

//       <h2>Technical Background</h2>
//       <div className="form-group">
//         <label>Any Technical Background?<span className="required">*</span></label>
//         <input
//           type="text"
//           name="technicalBackground"
//           value={formData.technicalBackground}
//           onChange={handleChange}
//           required
//         />
//       </div>
//       <div className="form-group">
//         <label>Technical Language/Tools you know<span className="required">*</span></label>
//         <Select
//           name="languages"
//           options={languageOptions}
//           isMulti
//           value={formData.languages}
//           onChange={handleLanguageChange}
//           required
//         />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default CandidateForm;
