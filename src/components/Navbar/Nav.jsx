import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import {
  Navbar,
  NavContainer,
  NavLogo,
  NavItem,
  NavLink,
  NavMenu,
  Button,
} from "./NavElement";

const Nav = ({ onSearch, logout }) => {

  return (
    <Navbar>
      <NavContainer>
        <NavLogo to="/">Rick&Morty</NavLogo>
        <NavMenu>
          <NavItem>
            <NavLink to="/home">HOME</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/about">ABOUT</NavLink>
          </NavItem>
        </NavMenu>
        <SearchBar onSearch={onSearch} />
        <Button onClick={logout}>LOG OUT</Button>
      </NavContainer>
    </Navbar>
  );
};

export default Nav;
