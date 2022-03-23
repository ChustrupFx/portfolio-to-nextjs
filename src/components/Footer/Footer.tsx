import { FooterContainer, FooterText } from "./style";

const Footer: React.FC = () => {
  return (
    <>
      <FooterContainer>
        <FooterText>
          {new Date().getFullYear()} © Todos os Direitos Reservados
        </FooterText>
      </FooterContainer>
    </>
  );
};

export default Footer;
