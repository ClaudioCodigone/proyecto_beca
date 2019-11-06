import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Button from "./Button";
import Home from "../homeIcon.png";
import { directive } from "@babel/types";

function Footer() {
  return (
    <div>
      <div className="text-center fixed-bottom">
        <Link to="/">
          <Button
            class="p-3 w-25 m-auto d-block d-sm-block d-md-none"
            image={Home}
            alt="homeButton"
          />
        </Link>
      </div>
      <div className="text-center">
        <Link to="/">
          <Button
            class="p-3 w-25 mt-5 m-auto d-none d-sm-none d-md-block"
            image={Home}
            alt="homeButton"
          />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
