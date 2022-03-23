import styled from "styled-components";

export const MainSection = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-image: url("/images/code-screen-bg.jpg");
  background-position: center center;
  background-size: cover;
  z-index: 1;

  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: brightness(0.8);
  }
`;

export const Texts = styled.div`
  text-align: center;
  text-shadow: 5px 5px 5px black;
  color: white;
  z-index: 2;
`;

export const Name = styled.h1`
  font-size: 100px;
`;

export const Occupation = styled.h2`
  font-size: 32px;
`;

export const ArrowButton = styled.button`
  outline: none;
  border-radius: 50%;
  border: none;
  padding: 10px;
  background-color: #da495a;
  position: absolute;
  bottom: 30px;
  box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.5);
`;