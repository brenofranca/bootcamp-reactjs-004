import { createGlobalStyle } from 'styled-components';

import 'font-awesome/css/font-awesome.min.css';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body {
        font-family: sans-serif;
        background: #333;
        color: #fff;
        text-rendering: optimizeLegibility !important;
        -webkit-font-smoothing: antialiased !important;
    }

    button {
        cursor: pointer;
    }
`;
