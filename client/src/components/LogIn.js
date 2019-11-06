import React from "react";
import LogInIcon from "./login-icon.jpg";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import './LogIn.css'

function LogIn() {
   return ( 
  <div className="dropdown text-left p-3">
      <img src={LogInIcon} className="" id="dropdownMenuButton"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"></img>
    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
      <Link className="dropdown-item" to="/CreateAccount">
        Create Account
      </Link>
      <Link className="dropdown-item" to="/LogInPage">
        Log In
      </Link>
    </div>
  </div>
  );
}

export default LogIn;
