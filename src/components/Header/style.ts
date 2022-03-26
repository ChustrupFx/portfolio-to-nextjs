import styled from "styled-components";
import mediaQueries from "../../styles/mediaQueries";

type headerProps = {
  blackBG: boolean;
};

export const Header = styled.header<headerProps>`
  width: 100%;
  height: 60px;
  background-color: transparent;
  position: fixed;
  top: 0;
  z-index: 10;
  background-color: ${(props) =>
    props.blackBG ? "rgba(0, 0, 0, 0.5)" : "transparent"};
  transition: background-color 300ms;

  @media (max-width: ${mediaQueries.medium}) {
    display: none;
  }
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
`;

export const ItemLink = styled.a`
  height: 100%;
  color: white;
  font-size: 20px;
  padding: 0 5rem;
  border: none;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LinkText = styled.span``;
