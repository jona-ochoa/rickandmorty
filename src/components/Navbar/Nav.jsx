import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import {   
  Navbar,
  NavContainer,
  NavLogo,
  NavItem,
  NavLink,
  NavMenu
 } from "./NavElement";

const Nav = ({ onSearch }) => {
  return (
    <Navbar>
      <NavContainer>
        <NavLogo to="/">
          Rick&Morty
        </NavLogo>

        <NavMenu>
          <NavItem>
            <NavLink to="/home">HOME</NavLink> 
          </NavItem>
          <NavItem>
            <NavLink to="/about">ABOUT</NavLink>
          </NavItem>
        </NavMenu>
          <SearchBar onSearch={onSearch} />
      </NavContainer>
    </Navbar>
  );
}

export default Nav;
