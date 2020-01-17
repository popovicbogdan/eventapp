import styled from "styled-components";

export const Card = styled.div.attrs({ className: "card hoverable" })`
  && {
    max-width: 290px;
    max-height: 290px;
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
    @media (max-width: 600px) {
      height: 30vw;
    }
    height: 20vw;
    width: 100%;
    object-fit: cover;
    @media (min-width: 993px) {
      height: 13vw;
    }
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
