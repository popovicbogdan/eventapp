import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const TopPart = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
export const BottomPart = styled.div`
  display: ${({ isHidden }) => (isHidden ? "" : "none")};
`;

export const NewEventCont = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
