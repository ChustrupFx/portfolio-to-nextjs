import styled from "styled-components";

export const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-row-gap: 3rem;
  grid-column-gap: 5rem;
  width: 100%;
`;

export const SkillItem = styled.div`
  width: 100%;
`;

export const Label = styled.span`
  font-size: 1.2rem;
`;
