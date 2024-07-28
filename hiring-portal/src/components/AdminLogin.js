import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'admin' && password === '123') {
      alert('Login successful');
      navigate('/admin-dashboard'); // Redirect to admin dashboard or any admin page
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="admin-login">
      <h2>Admin Login</h2>
      <div className="form-group">
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default AdminLogin;
