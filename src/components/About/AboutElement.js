import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: rgb(120, 0, 0);
  background: linear-gradient(
    143deg,
    rgba(120, 0, 0, 1) 0%,
    rgba(193, 18, 31, 1) 65%
  );
  align-items: center;
  padding-top: 60px;
  height: 100vh;
  text-align: center;
  @media screen and (max-width: 620px) {
    flex-direction: column;
    text-align: center;
    height: 100%;
  }
`;

export const WrapperDiv = styled.div`
  display: flex;
  border-radius: 12px;
  box-shadow: 18px 19px 14px 17px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 18px 19px 14px 17px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 18px 19px 14px 17px rgba(0, 0, 0, 0.75);
  @media screen and (max-width: 620px) {
    flex-direction: column-reverse;
    text-align: center;
    justify-content: center;
    border-radius: 0px;
  }
`

export const AboutWrap = styled.div`
  width: 400px;
  height: 400px;
  flex-direction: row;
  @media screen and (max-width: 620px) {
    flex-direction: column-reverse;
  }
`;

export const AboutWrapText = styled.div`
  width: 400px;
  height: 400px;
  background: rgb(102, 155, 188);
  background: linear-gradient(
    143deg,
    rgba(102, 155, 188, 1) 0%,
    rgba(0, 48, 73, 1) 65%
  );
  color: #fff;
  padding: 1em;
  text-align: left;
  border-radius: 0 18px 18px 0;
  @media screen and (max-width: 620px) {
   width: 100%;
   text-align: center;
  }
`;

export const Image = styled.img`
  border-radius: 14px 0 0 14px;
  width: 400px;
  height: 400px;
  object-fit: cover;

  @media screen and (max-width: 620px) {
    height: 100%;
    width: 100%;
    border-radius: 0px;
  }
`;

export const Text = styled.h4`
  color: #fdf0d5;
  font-size: 1rem;
`;

export const TextLink = styled.h4`
  font-size: 1em;
  color: #2c5;
  font-weight: 900px;
  &:hover {
    color: #3f0594;
  }
`;
