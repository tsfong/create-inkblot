import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import App from "./App.js";
import { HashRouter as Router } from 'react-router-dom';

ReactDOM.render(
    <Router>
      <App />
    </Router>, 
  
document.getElementById("root"));