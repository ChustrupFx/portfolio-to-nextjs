import { Paragraph } from "./style";

const AboutMe: React.FC = () => {
  return (
    <>
      <Paragraph data-aos="fade-up">
        Meu nome é Victor, tenho 18 anos.{" "}
      </Paragraph>
      <Paragraph data-aos="fade-up">
        Comecei a estudar programação em 2018 e foi aí que descobri a minha
        paixão. Desde então venho estudando as tecnologias mais atuais do
        mercado, tentando sempre me atualizar e me adaptar as novidades do mundo
        da programação.
      </Paragraph>
      <Paragraph data-aos="fade-up">
        Hoje em dia me aventuro sendo freelancer, sempre aceitando novos
        desafios e estando a total disposição dos meus clientes.
      </Paragraph>
    </>
  );
};

export default AboutMe;
