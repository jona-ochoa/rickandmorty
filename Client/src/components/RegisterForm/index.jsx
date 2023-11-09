import { useState } from "react";
import {
  FormContainer,
  InputsWrapper,
  Label,
  Input,
  Button,
  Image,
  Content,
  InputsContent,
  DivButton,
  TextError,
} from "../Form/FormElement";
import validation from "../Form/validation";

const RegisterForm = ({ register }) => {
  const [errors, setErrors] = useState([]);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

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

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateErrors = validation(userData);
    setErrors(validateErrors);

    if (Object.keys(validateErrors).length === 0) {
      register(userData);
    }
  };

  return (
    <FormContainer>
      <Content>
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2PNgriWT5_Uj7CFmvanxcpBMx_JZn976wNKXxYsgV5A&s"
          alt=""
        />
        <InputsWrapper>
          <InputsContent>
            <Label>Email:</Label>
            <Input
              value={userData.email}
              onChange={handleChange}
              type="text"
              name="email"
              placeholder="jonatan.c.ochoa@gmail.com"
            />
            {errors.email && <TextError>{errors.email}</TextError>}
          </InputsContent>
          <InputsContent>
            <Label>Password:</Label>
            <Input
              value={userData.password}
              onChange={handleChange}
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="123asd"
            />
            {errors.password && <TextError>{errors.password}</TextError>}
            <Button type="button" onClick={handleTogglePassword}>
              {showPassword ? "Ocultar" : "Mostrar"} Contraseña
            </Button>
          </InputsContent>
          <DivButton>
            <Button type="submit" onClick={handleSubmit}>
              Register
            </Button>
          </DivButton>
        </InputsWrapper>
      </Content>
    </FormContainer>
  );
};

export default RegisterForm;
