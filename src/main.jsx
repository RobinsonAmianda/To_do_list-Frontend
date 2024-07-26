import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';


// Get the root element from the DOM
const container = document.getElementById('root');

// Create a root using the new API
const root = createRoot(container);

// Render the application
root.render(
  <Router>
    <App />
  </Router>
);