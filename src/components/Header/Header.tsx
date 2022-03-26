import { useCallback, useEffect, useState } from "react";
import { Header as H, Nav, NavList, ListItem, ItemLink } from "./style";

const Header: React.FC = () => {
  const [blackBG, setBlackBG] = useState(false);
  const onScroll = useCallback((e: Event) => {
    if (window.scrollY > 60) {
      setBlackBG(true);
    } else {
      setBlackBG(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <H blackBG={blackBG}>
      <Nav>
        <NavList>
          <ListItem>
            <ItemLink href="#gallery">Portfólio</ItemLink>
          </ListItem>
          <ListItem>
            <ItemLink href="#skills">Habilidades</ItemLink>
          </ListItem>
          <ListItem>
            <ItemLink href="#about-me">Sobre Mim</ItemLink>
          </ListItem>
          <ListItem>
            <ItemLink href="#contact">Contato</ItemLink>
          </ListItem>
        </NavList>
      </Nav>
    </H>
  );
};

export default Header;
