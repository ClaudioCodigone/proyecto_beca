import React from "react";
import "./DropdownMenu.css";

function DropdownMenu() {
  return (
    <nav className="nav flex-column text-left" id="right-menu">
      <a className="nav-link active" href="#">
        Active
      </a>
      <a className="nav-link" href="#">
        Link
      </a>
      <a className="nav-link" href="#">
        Link
      </a>
      <a className="nav-link" href="#">
        Disabled
      </a>
    </nav>
  );
}

export default DropdownMenu;
