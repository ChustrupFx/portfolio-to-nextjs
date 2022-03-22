import { Header as H, Nav, NavList, ListItem, ItemButton } from "./style";

const Header: React.FC = () => {
  return (
    <H>
      <Nav>
        <NavList>
          <ListItem>
            <ItemButton>Portfólio</ItemButton>
          </ListItem>
          <ListItem>
            <ItemButton>Habilidades</ItemButton>
          </ListItem>
          <ListItem>
            <ItemButton>Sobre Mim</ItemButton>
          </ListItem>
          <ListItem>
            <ItemButton>Contato</ItemButton>
          </ListItem>
        </NavList>
      </Nav>
    </H>
  );
};

export default Header;
