import dynamic from "next/dynamic";
import {
  SiLaravel,
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNextdotjs,
} from "react-icons/si";
import { SkillsContainer, SkillItem, Label } from "./style";

const Skills: React.FC = () => {
  const svgs = [
    {
      Component: SiReact,
      color: "#00D8FF",
      label: "React e React Native",
    },
    {
      Component: SiNextdotjs,
      color: "#000",
      label: "NextJS",
    },
    {
      Component: SiLaravel,
      color: "#fb503b",
      label: "Laravel",
    },
    {
      Component: SiNodedotjs,
      color: "#68a063",
      label: "Node",
    },
    {
      Component: SiTypescript,
      color: "#007acc",
      label: "Typescript",
    },
    {
      Component: SiHtml5,
      color: "#F1662A",
      label: "HTML",
    },
    {
      Component: SiCss3,
      color: "#1572BC",
      label: "CSS",
    },
    {
      Component: SiJavascript,
      color: "#F7DF1E",
      label: "Javascript",
    },
  ];

  return (
    <SkillsContainer>
      {svgs.map(({ Component, color, label }, index) => {
        return (
          <SkillItem
            data-aos="flip-left"
            data-aos-delay={200 * index}
            data-aos-easing="ease-in-out"
            key={index}
          >
            <div>
              <Component
                size={"100%"}
                color={color}
                style={{ marginBottom: 10 }}
              />
              <Label>{label}</Label>
            </div>
          </SkillItem>
        );
      })}
    </SkillsContainer>
  );
};

export default Skills;
