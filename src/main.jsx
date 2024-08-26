import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Import the CSS file

// Create a root element and render the App component into it
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
