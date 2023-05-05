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
  margin-left: 1em;
  border-radius: 8px;
  padding: 6px 18px;

  background: #3f0594;
  color: #fff;
  border: none;
  transition: all 0.3s;
  &:hover {
    cursor: pointer;
    background: #52f;
  }
`;

export const Input = styled.input`
  border-radius: 8px;
  padding: 6px 18px;
  border: 1px solid #363334;
  color: #363334;
  font-size: 1em;
  outline: none;
`;
