import styled from "styled-components";

export const Container = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 80px;
  width: 100vw;
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
  background: #fff;
  color: #000;
  padding: 1em;
  text-align: left;
  border-radius: 10px;
  @media screen and (max-width: 620px) {
    padding: 10px;
    width: 300px;
    margin-bottom: 10px;
  }
`;

export const Image = styled.img`
  border-radius: 14px;
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
