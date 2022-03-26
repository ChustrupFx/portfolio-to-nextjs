import Container from "../Container/Container";
import { Section as StylizedSection, Title, Content } from "./style";

type SectionProps = {
  title: string;
  id: string;
};

const Section: React.FC<SectionProps> = ({ title, children, id }) => {
  return (
    <>
      <StylizedSection id={id}>
        <Container>
          <Title>{title}</Title>
          <Content>{children}</Content>
        </Container>
      </StylizedSection>
    </>
  );
};

export default Section;
