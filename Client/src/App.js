import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Cards from "./components/Cards/Cards";
import Nav from "./components/Navbar/Nav";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import GlobalStyles from "./GlobalStyles";
import Form from "./components/Form/Form";
import RegisterForm from "./components/RegisterForm";
import Favorites from "./components/Favorites/Favorites";

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const [characters, setCharacters] = useState([]);

  async function login(userData) {
    try {
      const { email, password } = userData;
      const URL = "https://rickandmorty-m2y1.onrender.com/rickandmorty/login";
      const { data } = await axios(
        URL + `?email=${email}&password=${password}`
      );
      const { access } = data;
      access && navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  }

  async function register(userData) {
    try {
      const { email, password } = userData;
      const URL =
        "https://rickandmorty-m2y1.onrender.com/rickandmorty/register";
      await axios.post(URL, { email, password });

      // Registro exitoso, establece access en true
      setAccess(true);

      // Puedes incluso redirigir a la página de inicio después del registro
      navigate("/home");
    } catch (error) {
      setError("Error al registrar. Verifica tus datos e inténtalo de nuevo.");
    }
  }

  async function onSearch(id) {
    try {
      const { data } = await axios(
        `https://rickandmorty-m2y1.onrender.com/rickandmorty/character/${id}`
      );

      if (data.name) {
        const characterExists = characters.find(
          (character) => character.id === data.id
        );
        if (!characterExists) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          alert("¡Ya existe un personaje con este ID!");
        }
      }
    } catch (error) {
      alert("¡No hay personajes con este ID!");
    }
  }

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  const logout = () => {
    setAccess(false);
    setCharacters([]);
  };

  useEffect(() => {
    const isLoginPage = location.pathname === "/";
    const isRegisterPage = location.pathname === "/register";

    // Permitir acceso si no estás en la página de inicio ni en la página de registro
    if (!access && !isLoginPage && !isRegisterPage) {
      navigate("/");
    }
  }, [access, location.pathname, navigate]);

  return (
    <>
      <GlobalStyles />
      {location.pathname !== "/" && <Nav onSearch={onSearch} logout={logout} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/register"
          element={<RegisterForm register={register} />}
        />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  );
};

export default App;
