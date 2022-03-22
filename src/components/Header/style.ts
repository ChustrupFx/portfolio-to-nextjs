import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 60px;
  background-color: transparent;
  position: fixed;
  top: 0;
  z-index: 10;
`;

export const Nav = styled.nav`
  width: 100%;
  height: 100%;
`;

export const NavList = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ListItem = styled.li`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ItemButton = styled.button`
  height: 100%;
  color: white;
  font-size: 20px;
  padding: 0 5rem;
  border: none;
  background-color: transparent;
`;
