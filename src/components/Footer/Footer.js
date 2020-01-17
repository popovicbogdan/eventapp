import React from "react";
import { ReactComponent as Logo } from "../../common/logo.svg";

import { FooterContainer } from "./Footer.styled";
const Footer = () => {
  return (
    <FooterContainer>
      <span>Powered by</span> <Logo />
    </FooterContainer>
  );
};

export default React.memo(Footer);
