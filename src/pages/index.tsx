import GlobalStyle from "../styles/globalStyle";
import Header from "../components/Header/Header";
import Section from "../components/Section/Section";
import Gallery from "../components/Gallery/Gallery";

import type { NextPage } from "next";
import Skills from "../components/Skills/Skills";
import AboutMe from "../components/AboutMe/AboutMe";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Divider from "../components/Divider/Divider";
import MainSection from "../components/MainSection/MainSection";

const Home: NextPage = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <MainSection />

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
