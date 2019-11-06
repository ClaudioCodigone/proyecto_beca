import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <img className={props.class} src={props.image} alt={props.altText}></img>
  );
}

export default Button;
