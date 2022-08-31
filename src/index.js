import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const html = document.getElementById('root')
html.setAttribute("style", "height: 100%")
const root = ReactDOM.createRoot(html);
root.render(
  <App />
);
