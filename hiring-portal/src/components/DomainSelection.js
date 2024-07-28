
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faCode, faDesktop, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import './styles.css';

const DomainSelection = () => {
  const navigate = useNavigate();

  const handleDomainSelect = (domain) => {
    navigate(`/resume-upload?domain=${domain}`);
  };

  const handleAdminLogin = () => {
    navigate('/admin-login');
  };

  return (
    <div className="domain-selection">
      <div className="admin-login-container">
        <button onClick={handleAdminLogin} className="admin-login-button">Admin Login</button>
      </div>
      <h1 className="text-center">WE ARE HIRING</h1>
      <div className="domain-buttons">
        <button onClick={() => handleDomainSelect('UI/UX Designer')} className="domain-button">
          <FontAwesomeIcon icon={faPalette} size="3x" />
          <p>UI/UX Designer</p>
        </button>
        <button onClick={() => handleDomainSelect('Frontend Developer')} className="domain-button">
          <FontAwesomeIcon icon={faCode} size="3x" />
          <p>Frontend Developer</p>
        </button>
        <button onClick={() => handleDomainSelect('Fullstack Developer')} className="domain-button">
          <FontAwesomeIcon icon={faDesktop} size="3x" />
          <p>Fullstack Developer</p>
        </button>
        <button onClick={() => handleDomainSelect('Backend Developer')} className="domain-button">
          <FontAwesomeIcon icon={faProjectDiagram} size="3x" />
          <p>Backend Developer</p>
        </button>
      </div>
    </div>
  );
};

export default DomainSelection;

