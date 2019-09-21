import React from "react";

export const Alert = props => (
  <div className={`col-md-12 alert ${props.alertType}`} role="alert">
    {props.alertMessage}
  </div>
);
