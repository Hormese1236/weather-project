import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./Components/Home";
import App from "./Components/App";
import City2 from "./Components/City2";
import Banglore from "./Components/Banglore";
import reportWebVitals from "./reportWebVitals";
import Mumbai from "./Components/Mumbai";
import Mylocation from "./Components/Mylocation";
import "bootstrap/dist/css/bootstrap.min.css";


ReactDOM.render(
  <React.StrictMode>
    <App />
    <Home name="My Location" city="Pithoragarh" climate="Cloudy" temp="12°C" />
    <Home name="New Delhi" time="2:12PM" climate="Cloudy" temp="12°C" />
    {/* <Home classname="banglore" name="Banglore" time="2:12PM" climate="Mostly sunny" temp="26°C"  /> */}

    {/* <City2 /> */}
    <Banglore />
     <Mumbai /> 
    <Mylocation /> 
 
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
