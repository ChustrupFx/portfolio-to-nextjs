import styled from "styled-components";
import mediaQueries from "../../styles/mediaQueries";

export const Section = styled.section`
  width: 100%;
  text-align: center;
  color: white;
  background-color: #182229;
  padding: 20px 0;
  position: relative;
`;

export const Title = styled.h2`
  font-size: 50px;
  margin-bottom: 20px;
`;

export const Content = styled.div``;

export const Placeholder = styled.div`
  visibility: hidden;
  position: absolute;
  top: -60px;
  left: 0;

  @media (max-width: ${mediaQueries.small}) {
    top: 0;
  }
`;
