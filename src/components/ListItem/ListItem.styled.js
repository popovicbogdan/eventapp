import styled from "styled-components";
import Button from "../Button/Button";

export const Container = styled.div`
  display: flex;
  margin-left: 10px;
  justify-content: space-between;
  padding: 10px 0;
  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

export const Flexbox = styled.div`
  display: flex;
`;
export const Image = styled.img`
  width: 150px;
  height: 100px;
`;
export const Section = styled.div`
  @media (max-width: 600px) {
    padding-top: 0;
  }
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 10px 15px 5px;
  font-family: "Gayathri";
`;
export const DateSection = styled(Section)`
  @media (max-width: 600px) {
    padding: 10px 0 0 13px;
    flex-direction: row;
    justify-content: flex-start;
  }
`;

export const DateSpan = styled.span`
  font-size: 1.3em;
  margin: 0 2px;
`;
export const DayAndTime = styled.span`
  color: #e838ff;
  font-weight: bold;
`;
export const Author = styled.span`
  font-weight: bold;
`;
export const Details = styled.span`
  font-weight: bold;
  font-size: 1.4em;
`;
export const AnchorButton = styled.a`
  display: inline-flex;
  align-self: center;
  background: #e838ff;
  color: white;
  border: none;

  &:hover {
    background: #960c99;
  }
  &:focus {
    background: #850071;
  }
`;
export const ButtonStyled = styled(Button)`
  height: 24px;
  width: 35px;
`;
