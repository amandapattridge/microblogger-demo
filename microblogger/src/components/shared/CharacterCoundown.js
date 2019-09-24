import React from "react";
import PropTypes from "prop-types";

const CharacterCountdown = ({ currentLength, maxLength }) => (
  <p
    className={`character-countdown text-right ${
      currentLength > maxLength ? "text-danger" : ""
    }`}>
    {maxLength - currentLength}
  </p>
);

CharacterCountdown.propTypes = {
  currentLength: PropTypes.number.isRequired,
  maxLength: PropTypes.number.isRequired
};

export default CharacterCountdown;
