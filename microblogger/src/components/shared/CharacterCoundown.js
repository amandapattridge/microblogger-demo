import React from "react";

export const CharacterCountdown = props => (
  <p
    className={`character-countdown text-right ${
      props.currentLength > props.maxLength ? "text-danger" : ""
    }`}>
    {props.maxLength - props.currentLength}
  </p>
);
