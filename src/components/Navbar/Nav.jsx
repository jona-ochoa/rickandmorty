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
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv-Iq4BR-ErVI6LRGd8xoJ2KjGnyahvLAHrA&usqp=CAU" 
            alt="Rick&Morty" 
            width="160px" 
            height="60px" 
          />
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
