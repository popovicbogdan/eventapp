import styled from "styled-components";
import Button from "../../components/Button/Button";

export const Container = styled.div.attrs({ className: "container" })`
  background: white;
  @media (max-width: 600px) {
    width: 70%;
  }
`;

export const Hr = styled.hr`
  margin-left: 10px;
  border-width: 1.5px;
  border-color: #e838ff;
  width: 5%;
`;
export const ButtonStyled = styled(Button)`
  margin-right: 10px;
  margin-bottom: 15px;
  height: 36px;
`;
