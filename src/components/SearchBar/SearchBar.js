import React, { useState, useEffect } from "react";
import { SearchBarContainer, Input, SearchButton } from "./SearchBar.styled";
import { setSearchInfo } from "../../store/actions/actionCreators";
import { useDispatch } from "react-redux";

const SearchBar = () => {
  const [inputVal, setInputVal] = useState("");
  const dispatch = useDispatch();

  const handleChange = e => {
    setInputVal(e.target.value);
  };

  const handleClick = () => {
    dispatch(setSearchInfo(inputVal));
  };

  const handleEnterKey = e => {
    e.key === "Enter" && dispatch(setSearchInfo(inputVal));
  };

  useEffect(() => {
    inputVal === "" && dispatch(setSearchInfo(""));
  }, [inputVal, dispatch]);

  return (
    <SearchBarContainer>
      <Input
        type="text"
        value={inputVal}
        placeholder="Search for artist, event or venue"
        onChange={handleChange}
        onKeyDown={handleEnterKey}
      />
      <SearchButton className="btn" icon="search" onClick={handleClick} />
    </SearchBarContainer>
  );
};

export default SearchBar;
