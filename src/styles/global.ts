import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: "Montserrat", sans-serif;
        font-weight: bold;

        color: ${({ theme }) => theme.colors.text}
    }

    a {
        text-decoration: none;
    }
`

export default GlobalStyle