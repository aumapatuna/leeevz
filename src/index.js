import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

// List of APIs
window.baseUrl = "https://wjap10b65e.execute-api.us-east-1.amazonaws.com";
window.devEnv = "dev";
//window.devEnv = "prod";
window.liveEnv = "live";
window.apiUser = "user";
window.apiUsers = "users";
window.apiLeave = "leave";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();