import React from 'react';
import { useParams } from 'react-router-dom';
import './CandidateInfo.css';

const CandidateInfo = () => {
  const { id } = useParams();
  const candidates = JSON.parse(localStorage.getItem('candidates')) || [];
  const candidate = candidates.find(c => c.id === id);

  if (!candidate) {
    return <p>Candidate not found</p>;
  }

  return (
    <div className="candidate-info">
      <h2>Personal Info</h2>
      <p>Name: {candidate.name}</p>
      <p>Contact: {candidate.contact}</p>
      <p>Email: {candidate.email}</p>
      <p>Current Address: {candidate.address}</p>
      
      <h2>Educational Background</h2>
      <p>Discipline: {candidate.discipline}</p>
      <p>Graduation Year: {candidate.graduationYear}</p>
      <p>University: {candidate.university}</p>
      
      <h2>Technical Background</h2>
      <p>The Languages You Have Worked With: {candidate.languages}</p>
    </div>
  );
};

export default CandidateInfo;
