import styled from "styled-components";

export const HeaderContainer = styled.nav`
  && {
    display: flex;
    background-color: #${props => props.color};
    justify-content: center;
    align-items: center;
    height: 65px;
  }
`;
