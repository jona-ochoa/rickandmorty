import styled from 'styled-components';

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 80px;
    justify-content: space-around;
    align-items: center;
    text-align: center;
`
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    height: 500px;
    border-radius: 12px;
    background: linear-gradient(45deg, #0000ff, #cb3234); 
    text-align: center;
    align-items: center;
    justify-content: space-around;
`

export const InputsWrapper = styled.form`
    display: flex;
    flex-direction: column;
    width: 300px;
`

export const Label = styled.label`
    display: flex;
    font-weight: 700;
`

export const Input = styled.input`
    font-size: 1em;
    padding: 8px 12px;
    outline: none;
    margin: 0;
    border: none;
    background: #cfcfcf;
    color: #222;
    font-weight: 700;
    &::placeholder{
        color: #555;
    }
`

export const Image = styled.img`
    width: 250px;
    height: 250px;
    border-radius: 50%;
`
export const Button = styled.button`
    background: green;
    color: black;
    padding: 8px 16px;
    border: none;
    border-radius: 5px;
    outline: none;
    font-weight: 700;
    cursor: pointer;
`
export const DivButton = styled.div`
    display: flex;
    width:100%;
    justify-content: space-around;
`
export const TextError = styled.p`
    color: red;
    font-weight: 900;
    padding: 0;
    margin: 0;
`
