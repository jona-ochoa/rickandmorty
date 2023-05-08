import styled from "styled-components";

export const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 5px;
  margin-left: 30px;
  padding: 0;
  width: 250px;
  border: 3px solid #2f5;
  background: #000;
  overflow: hidden;
  border-radius: 8px;
  text-align: left;
  @media screen and(max-width:768px){
    margin-left: 0;
  }
`;
export const CardWrapper = styled.div`
  display: flex;
  height: 200px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

export const Button = styled.button`
  position: absolute;
  right: 5px;
  top: 5px;
  background-color: red;
  border: none;
  font-size: 14px;
  opacity: 0.5;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    opacity: 1;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const TextWrapper = styled.div`
  display: flex;
  background: #111;
  color: #2f5;
  flex-direction: column;
  padding: 10px;
  margin: 0;
  height: 200px;
  align-items: flex-start;
  text-align: left;
  justify-content: center;
  line-height: 25px;
`;

export const Text = styled.h4`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  font-size: 14px;
  letter-spacing: 2px;
  text-align: left;
  font-family: monospace;
`;
export const TextNameLink = styled.h4`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  font-size: 14px;
  letter-spacing: 2px;
  color: #0000ff;
  text-align: left;
  &:hover {
    color: #3f0594;
  }
`;
