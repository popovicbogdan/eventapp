import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #${props => props.color};
  color: white;
  align-items: center;
  width: 100%;
  height: 50px;
  margin-top: 10px;
  > span {
    font-size: 0.8em;
  }
`;
