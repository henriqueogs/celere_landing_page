import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: "Montserrat", sans-serif;
        font-weight: bold;

        color: ${({ theme }) => theme.colors.text}
    }

    h2 {
        margin: 0;
    }

    a {
        text-decoration: none;
    }
`

export default GlobalStyle