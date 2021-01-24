import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/css/material-icons.css';
import './assets/css/antd.css';
import APIContextProvider from './services/context/api.context';

ReactDOM.render(
  <APIContextProvider>
    <App />
  </APIContextProvider>,
  document.getElementById('root')
);
