import styled from "styled-components";

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: "Creepster", cursive;
  letter-spacing: 1em;
  background: #111;
  width: 100vw;
  height: 100vh;
  @media screen and (max-width: 620px) {
    flex-direction: column;
    text-align: center;
    margin-top: 60px;
  }
`;

export const DetailContent = styled.div`
  flex: 1;
`;
export const DetailContentImg = styled.div`
  flex: 1;
`;

export const Img = styled.img`
  width: 400px;
  border-radius: 4%;
  box-shadow: 21px 20px 20px 0px rgba(250, 250, 250, 0.75);
  -webkit-box-shadow: 21px 20px 20px 0px rgba(250, 250, 250, 0.75);
  -moz-box-shadow: 21px 20px 20px 0px rgba(250, 250, 250, 0.75);
  @media screen and (max-width: 620px) {
    width: 200px;
  }
`;

export const Title = styled.h1`
  font-size: 50px;
  color: #00aae4;
  font-weight: 700;
  @media screen and (max-width: 620px) {
    font-size: 30px;
  }
`;

export const Subtitle = styled.h3`
  font-size: 34px;
  color: #00aae4;
  font-weight: 700;
  @media screen and (max-width: 620px) {
    font-size: 20px;
  }
`;
