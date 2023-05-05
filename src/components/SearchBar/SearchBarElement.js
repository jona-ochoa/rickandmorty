import styled from "styled-components";

export const DivContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 100vw;
  margin-top: 0.4em;
  margin-right: 0.2em;
`;

export const Button = styled.button`
  font-size: 1em;
  text-align: center;
  margin-left: 12px;
  border-radius: 3px;
  padding: 6px 18px;
  background: #3f0594;
  color: #fff;
  border: none;
  transition: all 0.3s;
  &:hover {
    cursor: pointer;
    background: #52f;
  }
  @media screen and (max-width: 620px) {
    padding: 6px 12px;
  }
`;

export const Input = styled.input`
  padding: 6px 6px;
  border: none;
  background: #333;
  max-width: 100%;
  border-bottom: 2px solid #999;
  color: #fff;
  font-size: 1em;
  outline: none;
  &::placeholder {
    color: #555;
  }
  &:focus {
    border-bottom: 2px solid #3f0594;
  }
  @media screen and (max-width: 620px) {
    font-size: 14px;
    width: 120px;
  }
`;
