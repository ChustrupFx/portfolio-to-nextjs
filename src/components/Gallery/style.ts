import styled from "styled-components";
import mediaQueries from "../../styles/mediaQueries";

export const GalleryContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 15px;
  grid-column-gap: 10px;

  @media (max-width: ${mediaQueries.large}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${mediaQueries.medium}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
