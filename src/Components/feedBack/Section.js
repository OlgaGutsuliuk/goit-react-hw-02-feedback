import React from "react";
import { container, heading } from "./FeedBack.module.css";
import PropTypes from "prop-types";

const Section = ({ title, children }) => {
  return (
    <div className={container}>
      <h2 className={heading}>{title}</h2>
      {children}
    </div>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired
};
