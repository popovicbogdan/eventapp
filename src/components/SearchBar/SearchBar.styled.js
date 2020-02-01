import styled from "styled-components";
import Button from "../Button/Button";

export const SearchBarContainer = styled.div`
  display: flex;
  width: 45%;
  border-radius: 10px;
  @media (max-width: 750px) {
    width: 80%;
`;

export const Input = styled.input.attrs({ className: "browser-default" })`
  flex-basis: 85%;
  padding-left: 10px;
  ::placeholder {
    color: grey;
  }
`;
export const SearchButton = styled(Button)`
  flex-basis: 15%;
`;
