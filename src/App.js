import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Nav from "./components/Navbar/Nav";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Detail from './components/Detail/Detail'
import GlobalStyles from "./GlobalStyles";
import Error from "./components/Error/Error";

const App = () => {
  const [characters, setCharacters] = useState([]);

  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((characters) => [...characters, data]);
        } else {
          alert("¡No hay personajes con este ID!");
        }
      }
    );
  };

  const onClose = (id) => {
    setCharacters(
      characters.filter((character) => character.id !== Number(id))
    )
  };

  return (
    <>
      <GlobalStyles />

        <Nav onSearch={onSearch} />
      <Routes>
        <Route path="/home" exact element={<Cards characters={characters} onClose={onClose} />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" exact element={<Error/>} />
      </Routes>  
   
    </>
  );
};

export default App;
