import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'

import './index.css';
import App from './App';

import { WorkerProvider } from './context/workerContext'

ReactDOM.render(
  <Router>
    <WorkerProvider>
      <App />
    </WorkerProvider>
  </Router>,
  document.getElementById('root')
);