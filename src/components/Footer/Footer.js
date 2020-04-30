import React, { useState, useEffect } from 'react';
import { ReactComponent as Logo } from '../../common/logo.svg';

import { useSelector } from 'react-redux';
import { FooterContainer } from './Footer.styled';
const Footer = () => {
  const [color, setColor] = useState();
  const colorS = useSelector(
    (state) => state.colors.primaryColors.componentColor
  );
  useEffect(() => {
    setColor(colorS);
  }, [colorS]);

  return (
    <FooterContainer color={color}>
      <span>Powered by</span> <Logo />
    </FooterContainer>
  );
};

export default React.memo(Footer);
