import React from "react";
import { btn } from "./FeedBack.module.css";
import PropTypes from "prop-types";

const FeedbackOptions = ({ handleIncrement }) => {
  return (
    <>
      <button type="button" className={btn} onClick={handleIncrement} name="good">
        Good
      </button>
      <button type="button" className={btn} onClick={handleIncrement} name="neutral">
        Neutral
      </button>
      <button type="button" className={btn} onClick={handleIncrement} name="bad">
        Bad
      </button>
    </>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  handleIncrement: PropTypes.func.isRequired
};
