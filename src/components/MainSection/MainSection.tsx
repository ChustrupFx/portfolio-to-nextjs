import {
  MainSectionContainer,
  Texts,
  Name,
  Occupation,
  ArrowButton,
} from "./style";
import { FaArrowDown } from "react-icons/fa";

const MainSection: React.FC = () => {
  return (
    <MainSectionContainer>
      <Texts>
        <Name>Victor Inácio</Name>
        <Occupation>Desenvolvedor Web</Occupation>
      </Texts>
      <ArrowButton>
        <FaArrowDown size={30} />
      </ArrowButton>
    </MainSectionContainer>
  );
};

export default MainSection;
