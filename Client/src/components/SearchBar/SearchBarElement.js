import styled from "styled-components";

export const Container = styled.div`
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
  padding: 6px 12px;
  background: #00aae4;
  color: #000;
  font-weight: 600;
  border: none;
  transition: all 0.3s;
  &:hover {
    cursor: pointer;
    background: #2c5;
    color: white;
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
    color: #777;
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
