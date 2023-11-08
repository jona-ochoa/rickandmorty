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
  WrapperInputButton,
} from "./NavElement";

const Nav = ({ onSearch, logout, allChar }) => {
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
          <NavItem>
            <NavLink to="/favorites">FAV</NavLink>
          </NavItem>
        </NavMenu>
        <WrapperInputButton>
          <SearchBar onSearch={onSearch} />
          <Button onClick={logout}>LOG OUT</Button>
        </WrapperInputButton>
      </NavContainer>
    </Navbar>
  );
};

export default Nav;
