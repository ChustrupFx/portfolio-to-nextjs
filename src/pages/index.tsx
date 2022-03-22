import GlobalStyle from "../styles/globalStyle";
import Header from "../components/Header/Header";

import type { NextPage } from "next";
import { FaArrowDown } from "react-icons/fa";
import { Section, Texts, Name, Occupation, ArrowButton } from "./styles";

const Home: NextPage = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Section>
        <Texts>
          <Name>Victor Inácio</Name>
          <Occupation>Desenvolvedor Web</Occupation>
          <ArrowButton>
            <FaArrowDown size={30} />
          </ArrowButton>
        </Texts>
      </Section>
    </>
  );
};

export default Home;
