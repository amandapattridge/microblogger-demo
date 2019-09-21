import React from "react";

export const Header = props => (
  <header className="header">
    <h1 className="align-middle" id="page-header">
      {props.title}
    </h1>
  </header>
);
