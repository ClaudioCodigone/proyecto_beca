import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import './Account.css';

function Account () {
    return (
      <div className="Account">
        <p>Want to build your own MYtinerary?</p>
        <div className="acc-links">
          <Link className="link ml-5" to="/LogInPage">Log In</Link>
          <Link className="link mr-5" to="/CreateAccount">Create Account</Link>
        </div>
      </div>
    )
  }

export default Account;