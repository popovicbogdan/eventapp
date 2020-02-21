import React, { useState, useEffect } from "react";
import { HeaderContainer } from "./Header.styled";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useSelector } from "react-redux";

const Header = () => {
  const [color, setColor] = useState();
  const colorS = useSelector(
    state => state.colors.primaryColors.componentColor
  );
  useEffect(() => {
    setColor(colorS);
  }, [colorS]);

  return (
    <HeaderContainer color={color}>
      <SearchBar />
    </HeaderContainer>
  );
};

export default Header;
