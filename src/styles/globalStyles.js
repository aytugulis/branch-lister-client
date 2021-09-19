import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

html {
    height: 100%;
}

body {
    background-color: ${({ theme: { colors } }) => colors.secondary.main};
}
`;

export default GlobalStyle