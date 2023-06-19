import styled from "styled-components";

export const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 5px;
  margin: auto;
  padding: 0;
  width: 250px;
  border: 3px solid #00aae4;
  overflow: hidden;
  border-radius: 8px;
  text-align: left;
  transition: ease 0.3s;
  &:hover {
    box-shadow: 15px 15px 16px 3px rgba(10,10,10,0.54);
    -webkit-box-shadow: 15px 15px 16px 3px rgba(10,10,10,0.54);
    -moz-box-shadow: 15px 15px 16px 3px rgba(10,10,10,0.54);
  }
  @media screen and(max-width:768px) {
    margin-left: 0;
    opacity: 1;
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
  font-size: 16px;
  text-align: center;
  align-items: center;
  font-weight: 900;
  padding: 0 5px 3px 5px;
  opacity: 0.7;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    opacity: 1;
  }
`;

export const ButtonFav = styled.button`
  position: absolute;
  background: transparent;
  left: 5px;
  top: 5px;
  border: none;
  font-size: 20px;
  border-radius: 5px;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const TextWrapper = styled.div`
  display: flex;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    143deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
  color: #fff;
  flex-direction: column;
  padding: 10px;
  margin: 0;
  height: 200px;
  align-items: flex-start;
  text-align: left;
  justify-content: center;
  line-height: 25px;
  transition: ease 0.3s;
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
  text-transform: uppercase;
  font-size: 14px;
  letter-spacing: 2px;
  color: #fff;
  text-align: left;
  transition: ease .3s;
  &:hover {
    color: #fc466b;
    text-decoration: underline;
  }
`;
