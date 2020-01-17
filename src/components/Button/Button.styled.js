import styled from "styled-components";

export const ButtonStyled = styled.button.attrs({
  type: "button"
})`
  display: inline-flex;
  justify-content: center;
  background: #e838ff;
  color: white;
  border: none;

  :hover {
    background: #960c99;
  }
  &:focus {
    background: #850071;
  }
`;
