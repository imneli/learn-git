import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    ::selection {
      color: #1e1e1e;
      background-color: #88ED92
    }
    font-family: 'Poppins';
    background-color: #1e1e1e;
  }
`;

export default GlobalStyle;