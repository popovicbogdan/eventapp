import styled from "styled-components";

export const IconStyled = styled.i.attrs({
  className: "material-icons",
  "data-testid": "icon"
})`
  && {
    line-height: inherit;
  }
`;
