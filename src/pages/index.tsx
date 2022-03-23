import GlobalStyle from "../styles/globalStyle";
import Header from "../components/Header/Header";
import Section from "../components/Section/Section";
import Gallery from "../components/Gallery/Gallery";

import type { NextPage } from "next";
import { FaArrowDown } from "react-icons/fa";
import { MainSection, Texts, Name, Occupation, ArrowButton } from "./styles";
import Skills from "../components/Skills/Skills";
import AboutMe from "../components/AboutMe/AboutMe";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Divider from "../components/Divider/Divider";
import Container from "../components/Container/Container";

const Home: NextPage = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <MainSection>
        <Texts>
          <Name>Victor Inácio</Name>
          <Occupation>Desenvolvedor Web</Occupation>
          <ArrowButton>
            <FaArrowDown size={30} />
          </ArrowButton>
        </Texts>
      </MainSection>
      <Section title="Projetos">
        <Gallery />
      </Section>
      <Divider />
      <Section title="Habilidades">
        <Skills />
      </Section>
      <Divider />
      <Section title="Sobre Mim">
        <AboutMe />
      </Section>
      <Divider />
      <Section title="Contato">
        <Contact />
      </Section>
      <Footer />
    </>
  );
};

export default Home;
