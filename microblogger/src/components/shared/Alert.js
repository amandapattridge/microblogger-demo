import React from "react";
import PropTypes from "prop-types";

const Alert = ({ alertMessage, alertType }) => (
  <div className={`col-md-12 alert ${alertType}`} role="alert">
    {alertMessage}
  </div>
);

Alert.propTypes = {
  alertType: PropTypes.string,
  alertMessage: PropTypes.string
};

export default Alert;
