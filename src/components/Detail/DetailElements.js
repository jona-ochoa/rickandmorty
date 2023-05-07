import styled from "styled-components";

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
  width: 500px;
  border-radius: 50%;
  @media screen and (max-width: 620px) {
   width: 200px;
  }
`;

export const Title = styled.h1`
  font-size: 50px;
  color: #000000;
  @media screen and (max-width: 620px) {
    font-size: 30px;
  }
`;

export const Subtitle = styled.h3`
  font-size: 34px;
  color: #000000;
  @media screen and (max-width: 620px) {
    font-size: 20px;
  }
`;
