import React from "react";
import { PropTypes } from "prop-types";
import { H6 } from "./Title.styled";

const Title = ({ children }) => {
  return (
    <H6>
      <nobr>{children}</nobr>
    </H6>
  );
};
Title.propTypes = {
  children: PropTypes.string
};
export default Title;
