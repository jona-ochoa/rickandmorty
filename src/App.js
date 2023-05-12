import { useState, useEffect } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Nav from "./components/Navbar/Nav";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import GlobalStyles from "./GlobalStyles";
import Error from "./components/Error/Error";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";

const EMAIL = "jonatan.c.ochoa@gmail.com";
const PASSWORD = "123asd";

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const login = (userData) => {
    if (userData.email === EMAIL && userData.password === PASSWORD) {
      setAccess(true);
      navigate("/home");
    }
  };

  const logout = () => {
    setAccess(false);
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((characters) => [...characters, data]);
        }
        if (!data.id || data.id.length > 820) {
          alert("¡No hay personajes con este ID!");
        }
      }
    );
  };

  const onClose = (id) => {
    setCharacters(
      characters.filter((character) => character.id !== Number(id))
    );
  };

  return (
    <>
      <GlobalStyles />
      {location.pathname !== "/" && <Nav onSearch={onSearch} logout={logout} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          exact
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" exact element={<Error />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  );
};

export default App;
