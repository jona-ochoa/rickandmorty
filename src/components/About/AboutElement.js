import styled from "styled-components";

export const Container = styled.div`
  flex-direction: row;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 60px;
  width: 100%;
  background: #258;
`;

export const AboutWrap = styled.section`
  padding: 1em;
  width: 400px;
`

export const AboutWrapText = styled.section`
  width: 400px;
  height: 400px;
  background: #fff;
  color: #000;
  padding: 1em;
  text-align: left;
  border-radius: 10px;
`

export const Image = styled.img`
  border-radius: 14px;
  width: 400px;
  height: 400px;
  object-fit: cover;
`