import React, { Component } from 'react';
import logo from "./MYtineraryLogo.png";
import Button from "./components/Button.js";
import Account from "./components/Account.js";
import { BrowserRouter as Router, Link } from "react-router-dom";
import LogIn from "./components/LogIn.js";
import DropdownMenu from "./components/DropdownMenu.js";
import circledArrow from "./circled-right-2.png";
import home from "./homeIcon.png";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {
    response: '',
    post: '',
    responseToPost: '',
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }
  
  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    
    return body;
  };
  
  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.post }),
    });
    const body = await response.text();
    
    this.setState({ responseToPost: body });
  };
  
render() {
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
        <Link to="/Cities"><Button class="w-50 m-3" image={circledArrow} altText="arrow" /></Link>
        <Account />
      </main>
    </div>
    );
  }
}

export default App;
