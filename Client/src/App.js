import { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate, Redirect } from "react-router-dom";
import axios from "axios";
import Cards from "./components/Cards/Cards";
import Nav from "./components/Navbar/Nav";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import GlobalStyles from "./GlobalStyles";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(false);
  const [characters, setCharacters] = useState([]);

  async function login(userData) {
    try {
      const { email, password } = userData;
      const URL = "https://rickandmorty-m2y1.onrender.com/rickandmorty/login";
      const { data } = await axios(URL + `?email=${email}&password=${password}`);
      const { access } = data;
      setAuthenticated(access);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function register(userData) {
    try {
      const { email, password } = userData;
      const URL = "https://rickandmorty-m2y1.onrender.com/rickandmorty/register";
      await axios.post(URL, { email, password });
      // Si el registro es exitoso, también puedes iniciar sesión automáticamente
      login(userData);
    } catch (error) {
      console.log(error.message);
    }
  }

  const logout = () => {
    setAuthenticated(false);
    setCharacters([]);
  };

  useEffect(() => {
    if (!authenticated && location.pathname !== "/") {
      navigate("/");
    }
  }, [authenticated, location.pathname, navigate]);

  const PrivateRoute = ({ element, ...rest }) => {
    return authenticated ? element : <Redirect to="/" />;
  };

  return (
    <>
      <GlobalStyles />
      {location.pathname !== "/" && <Nav onSearch={onSearch} logout={logout} />}
      <Routes>
        <Route path="/" element={<Form login={login} register={register} />} />
        <PrivateRoute
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <PrivateRoute path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  );
};

export default App;
