import React from "react";

export const Button = props => (
  <button
    type={props.type}
    onClick={props.clickFn}
    className={`btn ${props.styleName}`}>
    {props.title}
  </button>
);
