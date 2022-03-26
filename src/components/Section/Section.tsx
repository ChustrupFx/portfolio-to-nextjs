import Container from "../Container/Container";
import {
  Section as StylizedSection,
  Title,
  Content,
  Placeholder,
} from "./style";

type SectionProps = {
  title: string;
  id: string;
};

const Section: React.FC<SectionProps> = ({ title, children, id }) => {
  return (
    <>
      <StylizedSection>
        <Placeholder id={id}></Placeholder>
        <Container>
          <Title>{title}</Title>
          <Content>{children}</Content>
        </Container>
      </StylizedSection>
    </>
  );
};

export default Section;
