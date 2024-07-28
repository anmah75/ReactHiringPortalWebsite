import React, { useState, useEffect } from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [candidates, setCandidates] = useState([]);
  const [shortlisted, setShortlisted] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch candidates data from localStorage or an API
    const storedCandidates = JSON.parse(localStorage.getItem('candidates')) || [];
    setCandidates(storedCandidates);
    setShortlisted(storedCandidates.filter(candidate => candidate.shortlisted));
  }, []);

  const handleDelete = (id) => {
    const updatedCandidates = candidates.filter(candidate => candidate.id !== id);
    setCandidates(updatedCandidates);
    localStorage.setItem('candidates', JSON.stringify(updatedCandidates));
  };

  const domainData = {
    labels: ['Full-Stack Developer', 'Frontend Developer', 'UI/UX Design', 'iOS Developer'],
    datasets: [
      {
        data: [
          candidates.filter(c => c.domain === 'Full-Stack Developer').length,
          candidates.filter(c => c.domain === 'Frontend Developer').length,
          candidates.filter(c => c.domain === 'UI/UX Design').length,
          candidates.filter(c => c.domain === 'iOS Developer').length,
        ],
        backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56', '#4BC0C0'],
      },
    ],
  };

  const shortlistedData = {
    labels: ['Full-Stack Developer', 'Frontend Developer', 'UI/UX Design', 'iOS Developer'],
    datasets: [
      {
        label: 'Shortlisted Candidates',
        data: [
          shortlisted.filter(c => c.domain === 'Full-Stack Developer').length,
          shortlisted.filter(c => c.domain === 'Frontend Developer').length,
          shortlisted.filter(c => c.domain === 'UI/UX Design').length,
          shortlisted.filter(c => c.domain === 'iOS Developer').length,
        ],
        backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56', '#4BC0C0'],
      },
    ],
  };

  return (
    <div className="admin-dashboard">
      <div className="charts">
        <div className="chart">
          <h3>Applications by Domain</h3>
          <Pie data={domainData} />
        </div>
        <div className="chart">
          <h3>Shortlisted Candidates</h3>
          <Bar data={shortlistedData} />
        </div>
      </div>
      <div className="tables">
        <h3>All Candidates</h3>
        <table className="candidates-table">
          <thead>
            <tr>
              <th>Short List</th>
              <th>Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Resume</th>
              <th>Information</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {candidates.map(candidate => (
              <tr key={candidate.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={candidate.shortlisted}
                    onChange={() => {
                      const updatedCandidates = candidates.map(c =>
                        c.id === candidate.id ? { ...c, shortlisted: !c.shortlisted } : c
                      );
                      setCandidates(updatedCandidates);
                      localStorage.setItem('candidates', JSON.stringify(updatedCandidates));
                    }}
                  />
                </td>
                <td>{candidate.name}</td>
                <td>{candidate.email}</td>
                <td>{candidate.contact}</td>
                <td>
                  <a href={candidate.resume} target="_blank" rel="noopener noreferrer">
                    Download
                  </a>
                </td>
                <td>
                  <button onClick={() => navigate(`/candidate-info/${candidate.id}`)}>Show Info</button>
                </td>
                <td>
                  <button onClick={() => handleDelete(candidate.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="tables">
        <h3>Shortlisted Candidates</h3>
        <table className="candidates-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Domain</th>
              <th>Information</th>
              <th>Delete</th>
              <th>Send Email</th>
            </tr>
          </thead>
          <tbody>
            {shortlisted.map(candidate => (
              <tr key={candidate.id}>
                <td>{candidate.name}</td>
                <td>{candidate.email}</td>
                <td>{candidate.contact}</td>
                <td>{candidate.domain}</td>
                <td>
                  <button onClick={() => navigate(`/candidate-info/${candidate.id}`)}>Show Info</button>
                </td>
                <td>
                  <button onClick={() => handleDelete(candidate.id)}>Delete</button>
                </td>
                <td>
                  <button onClick={() => alert('Email functionality not implemented')}>Send Email</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
