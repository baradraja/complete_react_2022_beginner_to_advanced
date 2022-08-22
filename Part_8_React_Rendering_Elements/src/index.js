import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
const element = ReactDOM.createRoot(document.getElementById('element'));

function getCurrent() {
  const elem = (
    <div>
      <p>Hello Rendering</p>
      <h2>It is {new Date().toLocaleTimeString()}</h2>
    </div>
  );
  element.render(elem);
}

setInterval(getCurrent, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
