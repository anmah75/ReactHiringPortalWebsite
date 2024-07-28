

import React from 'react';
import ReactDOM from 'react-dom';import { Provider } from 'react-redux';
import store from './store';
import './components/styles.css';
import './components/CandidateForm.css';
import { Chart, ArcElement, CategoryScale } from 'chart.js';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
  
);
