import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Zilla Slab', serif ;
        font-weight: 400;
    }

    button {
        cursor: pointer;
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: initial;
    }

`;

export default GlobalStyle;
