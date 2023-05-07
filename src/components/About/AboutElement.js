import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: #112;
  align-items: center;
  padding-top: 60px;
  height: 100vh;
  text-align: center;

  @media screen and (max-width: 620px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const AboutWrap = styled.div`
  width: 400px;
  height: 400px;
  @media screen and (max-width: 620px) {
    padding: 10px;
  }
`;

export const AboutWrapText = styled.div`
  width: 400px;
  height: 400px;
  background: linear-gradient(45deg, #ff0000, #0000ff);
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
  opacity: .7;
  transition: ease-in-out .5s;
  &:hover{
    opacity:1;
  }
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
