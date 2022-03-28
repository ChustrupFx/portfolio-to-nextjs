import styled, { css, keyframes } from "styled-components";
import I from "next/image";

type LightBoxImageProps = {
  zooming: boolean;
  grabbing: boolean;
};

type DescriptionTextProps = {
  hasVisitLink: boolean;
};

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

const LightBoxOpeningAnimation = keyframes`

  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }

`;

export const LightBox = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
  display: grid;
  grid-template-rows: 80px calc(100% - 80px * 2) 80px;
  animation: ${LightBoxOpeningAnimation} 300ms ease-in-out 1 both;
`;

const ActionAndDescriptionCSS = css`
  padding: 0 15px;
  width: 100%;
  height: 100%;
  display: flex;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 12;
  align-items: center;
`;

export const Actions = styled.div`
  ${ActionAndDescriptionCSS}
  justify-content: flex-end;
`;
export const ActionButton = styled.button`
  outline: 0;
  border: 0;
  background-color: transparent;
  padding: 0 5px;

  & svg {
    font-size: 40px;
    color: rgba(255, 255, 255, 0.5);
    transition: color 100ms;
  }

  & svg:hover {
    color: white;
  }
`;

export const LightboxContent = styled.div``;

export const LigtboxImage = styled.img<LightBoxImageProps>`
  cursor: ${(props) =>
    props.zooming ? (props.grabbing ? "grabbing" : "grab") : "default"};
  transform: ${(props) => (props.zooming ? "scale(3)" : "scale(1)")};
  transition: transform 300ms;
  position: relative;
  top: 0;
  left: 0;
  height: 100%;
  max-width: 100%;
  object-fit: contain;
  text-align: center;
`;

export const Description = styled.div`
  ${ActionAndDescriptionCSS}
  justify-content: center;
  flex-direction: column;
  font-size: 1.4rem;
`;

export const DescriptionText = styled.span<DescriptionTextProps>`
  margin-bottom: ${(props) => (props.hasVisitLink ? "10px" : 0)};
`;

export const VisitLinkBtn = styled.a`
  background-color: ${(props) => props.theme.colors.red};
  border-radius: 5px;
  border: 1px black solid;
  color: white;
  min-width: 20%;
  text-align: center;
  padding: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    font-size: 1.4rem;
    margin-left: 5px;
  }
`;
