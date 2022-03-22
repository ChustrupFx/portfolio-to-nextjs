import { Section as StylizedSection, Title, Content } from "./style";

type SectionProps = {
  title: string;
};

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <>
      <StylizedSection>
        <Title>{title}</Title>
        <Content>{children}</Content>
      </StylizedSection>
    </>
  );
};

export default Section;
