import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navbar = styled.nav`
  /* background: #112; */
  background: #fff;
  height: 60px;
  margin-top: -60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  opacity: .5;
  transition: ease-in-out .4s;

  &:hover {
	  opacity: 1;
  }

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

export const NavLogo = styled(Link)`
  color: #2f5;
  letter-spacing: 1.4px;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 20px;
  font-weight: bold;
  text-decoration: none;
  @media screen and (max-width: 620px) {
    margin-left: 4px;
  }
`;
export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 860px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #363334;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -24px;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLink = styled(Link)`
  color: #363334;
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
    color: #2f5;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
