import { createGlobalStyle } from 'styled-components';
import MontserratThin from '../fonts/Montserrat-Thin.ttf';
import MontserratRegular from '../fonts/Montserrat-Regular.ttf';
import MontserratBold from '../fonts/Montserrat-Bold.ttf';
import 'modern-normalize';

export const GlobalStyles = createGlobalStyle`
  [data-theme='dark'] {
    --bg: #5d5d5d;
    --bg-item: #333333;
    --text: #fff;
    --toggle: #fff;
  }
  [data-theme='light'] {
    --bg: #fff;
    --text: #000;
    --toggle:#000;
    
  }
  html {
    box-sizing: border-box;
    width: 100vw;
    overflow-x: hidden;
  }

  /* @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratThin}) format('ttf'),
    url(${MontserratRegular}) format('ttf'),
    url(${MontserratBold}) format('ttf');
  } */
  body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    font-family: 'Nanum Myeongjo', serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  label,
  ul,
  p,
  a {
    margin: 0;
    padding: 0;
    list-style: none;
    text-decoration: none;
    color: var(--text);
  }
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  button {
    padding: 0;
    margin: 0;
    border: 0;
    background: none;
  }
`;
