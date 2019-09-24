import React from "react";
import "./Header.css";
import PropTypes from "prop-types";

const Header = ({ title }) => (
  <header className="header">
    <h1 className="align-middle" id="page-header">
      {title}
    </h1>
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
