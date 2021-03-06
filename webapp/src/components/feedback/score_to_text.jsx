import React from "react";
import PropTypes from "prop-types";
import { OverlayTrigger, Popover } from "react-bootstrap";

const ScoreToText = (props) => {
  let message;

  switch (props.score) {
    case 1:
      message = "Excellent";
      break;
    case 2:
      message = "Good";
      break;
    case 3:
      message = "Average";
      break;
    case 4:
      message = "Poor";
      break;
    case 5:
      message = "Terrible";
      break;
    default:
      message = "Unknown";
      break;
  }

  return (
    <React.Fragment>
      {(props.notes === "" && <span>{message}</span>) || <span>{message}</span>}
    </React.Fragment>
  );
};

ScoreToText.propTypes = {
  score: PropTypes.number.isRequired,
  notes: PropTypes.string.isRequired,
};

export default ScoreToText;
