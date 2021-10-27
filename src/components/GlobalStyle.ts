import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: content-box;
  }
  html {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    width: 100%;
    background-color: #EEEEEE;
    overflow: hidden;
  }
  body {
    margin: 0;
    padding: 0;
    min-height: calc(100vh - 2.25rem);
    width: 100%;
    font-family: 'Source Sans Pro';
    color: #333333;
    display: flex;
    flex-direction: column;
    position: relative;
  }
  h1 {
    font-size: 22px;
    font-weight: bold;
  }
  p {
    font-size: 18px;
  }
`;