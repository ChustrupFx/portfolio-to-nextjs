import styled from "styled-components";
import I from "next/image";

export const ItemContainer = styled.div`
  width: 100%;
  cursor: pointer;
  transition: filter 300ms;
  position: relative;
  border-radius: 2px;
  overflow: hidden;

  &:hover {
    filter: brightness(0.7);
  }

  &::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
`;

export const Image = styled(I)`
  object-fit: cover;
  transform: scale(1.2);
  transition: transform 300ms;

  &:hover {
    transform: scale(1);
  }
`;
