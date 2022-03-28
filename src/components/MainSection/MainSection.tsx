import {
  MainSectionContainer,
  Texts,
  Name,
  Occupation,
  ArrowButton,
} from "./style";
import { FaArrowDown } from "react-icons/fa";
import { Children, useEffect, useState } from "react";

import dynamic from "next/dynamic";
const AOSAnimated = dynamic(() => import("../AOSAnimated/AOSAnimated"), {
  ssr: false,
});

const MainSection: React.FC = () => {
  const nameToBeTyped = "Victor Inácio";
  const typeTimeEachLetterInMS = 100;
  const typeOfNameToBeFullyTypedInSeconds =
    typeTimeEachLetterInMS * nameToBeTyped.length + 100;

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
        <Name>{name || "Victor Inácio"}</Name>

        <Occupation
          data-aos={"zoom-in"}
          data-aos-delay={typeOfNameToBeFullyTypedInSeconds}
          data-aos-duration={800}
          data-aos-mirror="true"
          data-aos-once="true"
        >
          Desenvolvedor Web
        </Occupation>
      </Texts>
      <ArrowButton
        href="#gallery"
        animationDelay={`${typeOfNameToBeFullyTypedInSeconds + 800}ms`}
      >
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
