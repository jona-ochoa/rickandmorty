import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background: #111;
  align-items: center;
  margin-top: 60px;
  height: 100vh;

  @media screen and (max-width: 620px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const AboutWrap = styled.div`
  padding: 1em;
  width: 400px;
  @media screen and (max-width: 620px) {
    padding: 10px;
  }
`;

export const AboutWrapText = styled.div`
  width: 400px;
  height: 400px;
  background: #333;
  color: #fff;
  padding: 1em;
  text-align: left;
  border-radius: 0 18px 18px 0;
  @media screen and (max-width: 620px) {
    padding: 10px;
    width: 300px;
    margin-bottom: 10px;
  }
`;

export const Image = styled.img`
  border-radius: 14px 0 0 14px;
  width: 400px;
  height: 400px;
  object-fit: cover;
  @media screen and (max-width: 620px) {
    height: 200px;
    width: 200px;
  }
`;

export const TextLink = styled.h4`
  font-size: 1em;
  color: #2c5;
  font-weight: 900px;
  &:hover{
    color: #3f0594;
  }
`
