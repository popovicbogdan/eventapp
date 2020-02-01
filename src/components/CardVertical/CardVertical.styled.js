import styled from "styled-components";

export const Card = styled.div.attrs({ className: "card hoverable" })`
  && {
    margin: 10px 0;
  }
`;

export const CardImage = styled.div.attrs({ className: "card-image" })`
  > p {
    font-size: 1.3em;
    font-weight: bold;
    color: white;
    position: absolute;
    bottom: 0;
    left: 5%;
  }
`;

export const Image = styled.img`
  && {
    height: 25vh;
    max-height: 260px;
    min-height: 150px;
    width: 100%;
    object-fit: cover;
  }
`;

export const CardContent = styled.div.attrs({
  className: "card-content"
})`
  && {
    padding: 10px;
    > p {
      font-size: 1.1em;
      display: flex;
      font-weight: 600;
      align-items: center;
      color: black;
      > span {
        padding-left: 5px;
      }
    }
  }
`;
