import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
 }
  html,body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
  }
  
a {
  color: inherit;
  text-decoration: none;
 }

`;
 
export default GlobalStyle;