import styled from "styled-components";

export const DivContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
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

  @media screen and (max-width: 425px) {
    font-size: 10px;
    padding: 8px 6px;
  }
`;

export const Input = styled.input`
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  background: #333;
  max-width: 160px;
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

  @media screen and (max-width: 425px) {
    font-size: 10px;
    width: 50px;
    padding: 8px 6px;
  }
`;
