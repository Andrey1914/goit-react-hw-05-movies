import { css } from '@emotion/react';
import 'modern-normalize';

export const GlobalStyles = css`
  html {
    box-sizing: border-box;
    width: 100vw;
    overflow-x: hidden;
  }
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
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
  p {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  a {
    text-decoration: none;
  }
`;
