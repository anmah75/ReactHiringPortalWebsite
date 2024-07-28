
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DomainSelection from './components/DomainSelection';
import ResumeUpload from './components/ResumeUpload';
import CandidateForm from './components/CandidateForm';
import AdminLogin from './components/AdminLogin';
import AdminDashboard from './components/AdminDashboard';
import CandidateInfo from './components/CandidateInfo';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DomainSelection />} />
        <Route path="/resume-upload" element={<ResumeUpload />} />
        <Route path="/candidate-form" element={<CandidateForm />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/candidate-info/:id" element={<CandidateInfo />} />
      </Routes>
    </Router>
  );
};

export default App;
