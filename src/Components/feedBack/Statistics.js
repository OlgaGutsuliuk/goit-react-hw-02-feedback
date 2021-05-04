import React from "react";
import { forks } from "./FeedBack.module.css";
import PropTypes from "prop-types";

const Statistics = ({ good, neutral, bad, total, positiv }) => {
  return (
    <>
      <span className={forks}>Good: {good}</span>
      <span className={forks}>Neutral: {neutral}</span>
      <span className={forks}>Bad: {bad}</span>
      <span className={forks}>Total: {total}</span>
      <span className={forks}>Positive feedback: {positiv} %</span>
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiv: PropTypes.number.isRequired
};
