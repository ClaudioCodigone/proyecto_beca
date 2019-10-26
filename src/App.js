import React from "react";
import logo from "./MYtineraryLogo.png";
import Button from "./components/Button.js";
import Account from "./components/Account.js";
import LogIn from "./components/LogIn.js";
import DropdownMenu from "./components/DropdownMenu.js";
import circledArrow from "./circled-right-2.png";
import home from "./homeIcon.png";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App text-center">
      <header className="App-header">
        <img src={logo} className="App-logo w-75" alt="logo" />
        <p className="">
          Find your perfect trip, designed by insiders who know and love their
          cities.
        </p>
      </header>
      <main>
        <h3>Start Browsing</h3>
        <Button class="w-50 m-3" image={circledArrow} altText="arrow" />
        <Account />
      </main>
    </div>
  );
}

export default App;
