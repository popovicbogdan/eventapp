import React from "react";
import PropTypes from "prop-types";
import { ButtonStyled } from "./Button.styled";
import Icon from "../Icon/Icon";

const Button = ({ className, onClick, icon, children }) => {
  return (
    <ButtonStyled className={className} onClick={onClick}>
      {icon && <Icon>{icon}</Icon>}
      {children}
    </ButtonStyled>
  );
};

Button.defaultProps = {
  className: "btn"
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.elementType,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
};

export default React.memo(Button);
