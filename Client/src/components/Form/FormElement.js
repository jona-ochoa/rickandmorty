import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  @media screen and (max-width: 768px) {
    padding-top: 0;
    width: 100vw;
    height: 100vh;
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 500px;
  border-radius: 12px;
  background: linear-gradient(45deg, #0000ff, #cb3234);
  text-align: center;
  align-items: center;
  justify-content: center;
  
  @media screen and (max-width: 768px) {
    width: 100vw;
    height: 100vh;
    border-radius: 0;
    justify-content: center;
  }
`;

export const InputsWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const InputsContent = styled.div`
  position: relative;
  margin: 8px;
`

export const Label = styled.label`
  width: 100%;
  display: flex;
  font-weight: 700;
  color: #fff;
`;

export const Input = styled.input`
  font-size: 1em;
  width: 500px;
  padding: 8px 12px;
  outline: none;
  margin: 0;
  border: none;
  background: #cfcfcf;
  color: #222;
  font-weight: 700;
  &::placeholder {
    color: #555;
  }
`;

export const Image = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
`;
export const Button = styled.button`
  background: #4285F4;
  color: #fff;
  font-weight: 700;
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  outline: none;
  font-weight: 700;
  cursor: pointer;
  transition: all .3s;
  &:hover {
    background: #3367d6;
    }
`;
export const DivButton = styled.div`
  display: flex;
  margin-top: 25px;
  width: 100%;
  justify-content: space-around;
`;
export const TextError = styled.p`
  position: absolute;
  color: #ff0000;
  font-weight: 900;
  font-size: 14px;
  top: 77%;
  left: 0;
`;
