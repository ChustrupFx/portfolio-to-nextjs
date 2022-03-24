import dynamic from "next/dynamic";
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
const wow = new WOW.WOW({
  live: true,
});

const MainSection: React.FC = () => {
  const nameToBeTyped = "Victor Inácio";
  const typeTimeEachLetterInMS = 150;
  const typeOfNameToBeFullyTypedInSeconds = (150 * nameToBeTyped.length) / 1000;

  // useEffect(() => {
  //   wow.init();
  //   wow.sync();
  // });

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
