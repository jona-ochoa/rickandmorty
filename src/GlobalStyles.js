import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
html,
body {
    padding: 0;
    margin: 0;
    background-image: url('https://www.xtrafondos.com/descargar.php?id=6344&resolucion=1920x1080');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: fixed;
    min-height: 100vh;
    }

a {
    color: inherit;
    text-decoration: none;
}

* {
    box-sizing: border-box;
}
`;

export default GlobalStyles;
