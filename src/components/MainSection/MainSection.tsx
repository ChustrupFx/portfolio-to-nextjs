import {
  MainSectionContainer,
  Texts,
  Name,
  Occupation,
  ArrowButton,
} from "./style";
import { FaArrowDown } from "react-icons/fa";
import { useEffect, useState } from "react";

import WOW from "wowjs";

const MainSection: React.FC = () => {
  const typeTimeEachLetterInMS = 150;

  useEffect(() => {
    const interval = setInterval(() => {
      typeNextNameLetter(interval);
    }, typeTimeEachLetterInMS);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const [name, setName] = useState("");

  return (
    <MainSectionContainer>
      <Texts>
        <Name>{name}</Name>
        <Occupation>Desenvolvedor Web</Occupation>
      </Texts>
      <ArrowButton>
        <FaArrowDown size={30} />
      </ArrowButton>
    </MainSectionContainer>
  );

  function typeNextNameLetter(intervalVar: NodeJS.Timer) {
    setName((name) => {
      const nameToBeTyped = "Victor Inácio";
      const nameToBeTypedLength = nameToBeTyped.length;

      const typedNameLength = name.length;

      if (nameToBeTypedLength === typedNameLength) {
        clearInterval(intervalVar);
        return name;
      }

      const nextLetterToBeTyped = nameToBeTyped[typedNameLength];
      return name + nextLetterToBeTyped;
    });
  }
};

export default MainSection;
