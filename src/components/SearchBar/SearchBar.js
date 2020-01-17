import React, { useState } from "react";
import { SearchBarContainer, Input, SearchButton } from "./SearchBar.styled";
import { setSearchInfo } from "../../store/actions/actionCreators";
import { useDispatch } from "react-redux";

const SearchBar = () => {
  const [inputVal, setInputVal] = useState("");
  const dispatch = useDispatch();

  const handleChange = e => {
    setInputVal(e.target.value);
    dispatch(setSearchInfo(e.target.value));
  };

  const handleClick = () => {
    dispatch(setSearchInfo(inputVal));
  };

  return (
    <SearchBarContainer>
      <Input
        type="text"
        value={inputVal}
        placeholder="Search for artist, event or venue"
        onChange={handleChange}
      />
      <SearchButton className="btn" icon="search" onClick={handleClick} />
    </SearchBarContainer>
  );
};

export default SearchBar;
