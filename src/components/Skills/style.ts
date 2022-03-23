import styled from "styled-components";
import mediaQueries from "../../styles/mediaQueries";

export const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 3rem;
  grid-column-gap: 5rem;
  width: 100%;

  @media (max-width: ${mediaQueries.large}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${mediaQueries.medium}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const SkillItem = styled.div`
  width: 100%;
`;

export const Label = styled.span`
  font-size: 1.2rem;
`;
