import { useState } from "react";
import {
  FormContainer,
  InputsWrapper,
  Label,
  Input,
  Button,
  Image,
  Content,
  DivButton,
  TextError,
} from "./FormElement";
import validation from "./validation";

const Form = ({ login }) => {
  const [errors, setErrors] = useState([]);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });

    const validateErrors = validation({
      ...userData,
      [e.target.name]: e.target.value,
    });

    setErrors(validateErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(userData)

  };

  return (
    <FormContainer>
      <Content>
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2PNgriWT5_Uj7CFmvanxcpBMx_JZn976wNKXxYsgV5A&s"
          alt=""
        />
        <InputsWrapper onSubmit={handleSubmit}>

          <Label>Email:</Label>
          <Input
            value={userData.email}
            onChange={handleChange}
            type="text"
            name="email"
            placeholder="Enter email"
          />
          {errors.email && <TextError>{errors.email}</TextError>}

          <Label>Password:</Label>
          <Input
            value={userData.password}
            onChange={handleChange}
            type="text"
            name="password"
            placeholder="Enter password"
          />
          {errors.password && <TextError>{errors.password}</TextError>}

          <DivButton>
            <Button type="submit">Submit</Button>
          </DivButton>
        </InputsWrapper>
      </Content>
    </FormContainer>
  );
};

export default Form;
