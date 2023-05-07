import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
html,
body {
    padding: 0;
    margin: 0;
    background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZh4GaA5HX2seL2x2hgbDKCWJAwYbGKdVtLr9HHo4g0HD0ijPgt3q7JGPyXlyjhmoCBms&usqp=CAU');
    background-size: cover;
    background-repeat: no-repeat;
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