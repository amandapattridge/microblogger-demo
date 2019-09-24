import React from "react";
import PropTypes from "prop-types";

const Button = ({ clickFn, id, styleName, title, type }) => (
  <button type={type} onClick={clickFn} id={id} className={`btn ${styleName}`}>
    {title}
  </button>
);

Button.propTypes = {
  clickFn: PropTypes.func.isRequired,
  id: PropTypes.string,
  styleName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default Button;
