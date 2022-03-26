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
import dynamic from "next/dynamic";
import AOS from "aos";
import { useEffect } from "react";

const MainSection = dynamic(
  () => import("../components/MainSection/MainSection"),
  {
    ssr: false,
  }
);

const Home: NextPage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Header />
      <MainSection />

      <Section title="Projetos" id="gallery">
        <Gallery />
      </Section>
      <Divider />
      <Section title="Habilidades" id="skills">
        <Skills />
      </Section>
      <Divider />
      <Section title="Sobre Mim" id="about-me">
        <AboutMe />
      </Section>
      <Divider />
      <Section title="Contato" id="contact">
        <Contact />
      </Section>
      <Footer />
    </>
  );
};

export default Home;
