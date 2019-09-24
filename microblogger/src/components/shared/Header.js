import React from "react";
import "./Header.css";

export const Header = props => (
  <header className="header">
    <h1 className="align-middle" id="page-header">
      {props.title}
    </h1>
  </header>
);
