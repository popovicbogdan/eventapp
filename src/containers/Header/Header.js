import React from "react";
import { HeaderContainer } from "./Header.styled";
import SearchBar from "../../components/SearchBar/SearchBar";

const Header = () => {
  return (
    <HeaderContainer>
      <SearchBar />
    </HeaderContainer>
  );
};

export default Header;
