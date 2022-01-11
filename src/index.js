import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import App from './App';
import City2 from'./City2'
import Banglore from './Banglore';
import reportWebVitals from './reportWebVitals';
import Mumbai from './Mumbai'

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Home/>
    <City2/>
    <Banglore/>
    <Mumbai/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
