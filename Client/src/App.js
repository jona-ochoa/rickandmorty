import { useState, useEffect } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Nav from "./components/Navbar/Nav";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import GlobalStyles from "./GlobalStyles";
// import Error from "./components/Error/Error";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);
  // const [access, setAccess] = useState(true);

  // ! use jonatan.c.ochoa@gmail.com password: 123asd

  // async function login(userData) {
  //   try {
  //     const { email, password } = userData;
  //     const URL = "https://rickandmorty-m2y1.onrender.com/rickandmorty/login";
  //     const { data } = await axios(
  //       URL + `?email=${email}&password=${password}`
  //     );
  //     const { access } = data;
  //     setAccess(access);
  //     access && navigate("/home");
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }

  // useEffect(() => {
  //   !access && navigate("/");
  // }, [access]);

  // const logout = () => {
  //   setAccess(false);
  //   setCharacters([]);
  // };

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

  return (
    <>
      <GlobalStyles />
      {/* {location.pathname !== "/" && <Nav onSearch={onSearch}  logout={logout} />} */}
      <Nav onSearch={onSearch} />
      <Routes>
        {/* <Route path="/" element={<Form login={login} />} /> */}
        <Route path="/" element={<Cards characters={characters} onClose={onClose} />} />
        <Route
          path="/home"
          exact
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        {/* <Route path="*" exact element={<Error />} /> */}
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  );
};

export default App;
