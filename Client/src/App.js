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
    setCharacters([])
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const onSearch = (id) => {
  //   axios(`https://rickandmortyapi.com/api/character/${id}`).then(
  //     ({ data }) => {
  //       if (data.name) {
  //         setCharacters((characters) => [...characters, data]);
  //       }
  //       if (data.id && data.id) {
  //         alert("¡No hay personajes con este ID!");
  //       }
  //     }
  //   );
  // };

  axios(`http://localhost:3001/rickandmorty/character/${id}`)
  .then(({ data }) => {
    if (data.name) {
      // Verificamos si el personaje ya existe en la lista de personajes
      const characterExists = characters.some((character) => character.id === data.id);

      if (characterExists) {
        // Si el personaje ya existe, mostramos una alerta
        alert("¡Este personaje ya existe en la lista!");
      } else {
        // Si el personaje no existe, lo agregamos a la lista
        setCharacters((characters) => [...characters, data]);
      }
    } else {
      // Si no hay personajes con el ID especificado, mostramos una alerta
      alert("¡No hay personajes con este ID!");
    }
  })
}

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
