import React from "react";
import { PropTypes } from "prop-types";
import { IconStyled } from "./Icon.styled";

const Icon = ({ children }) => {
  return <IconStyled>{children}</IconStyled>;
};

Icon.propTypes = {
  children: PropTypes.string
};
export default React.memo(Icon);
