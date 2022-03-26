import { Header as H, Nav, NavList, ListItem, ItemLink } from "./style";

const Header: React.FC = () => {
  return (
    <H>
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
