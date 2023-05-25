import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navbar = styled.nav`
  background: #000;
  height: 60px;
  margin-top: -60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  align-items: center;
  z-index: 1;
  width: 100%;
  padding: 0 30px;
  max-width: 1300px;

   @media screen and (max-width: 1024px) {
    padding: 0 10px;
    justify-content: space-around;
  }
`;

export const WrapperInputButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`

export const NavLogo = styled(Link)`
  color: #00aae4;
  letter-spacing: 2.4px;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 2rem;
  display: flex;
  font-family: 'Creepster', cursive;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
  @media screen and (max-width: 920px) {
    display: none;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  @media screen and (max-width: 425px) {
    /* display: none; */
    margin: -30px;
  }
`;

export const NavItem = styled.li`
  height: 60px;
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-weight: 700;
  display: flex;
  text-decoration: none;
  padding: 0 1rem;
  align-items: center;
  height: 100%;
  font-size: 1.1rem;
  cursor: pointer;
  transition: ease 0.3s;

  &:hover {
    color: #00aae4;
  }

  @media screen and (max-width: 820px) {
    font-size: 14px;
    padding: 0 4px;
  }
  @media screen and (max-width: 425px) {
    padding: 0 1px;
  }
`;

export const Button = styled.button`
  background: red;
  color: white;
  padding: 6px 12px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 1em;
  font-weight: 600;
  overflow: hidden;
  height: 30px;
  opacity: 1;
  outline: none;
  align-items: center;
  transition: ease 0.3s;
  &:hover {
    background: white;
    color: red;
  }
  @media screen and (max-width: 425px) {
    font-size: 10px;
    padding: 4px 6px;
  }
`;
