import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle `
body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: Aliceblue; 
    padding-top: 80px;
    padding-bottom: 80px

  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  
  ul,
  li,
  h1,
  h2,
  h3,
  p {
      margin: 0;
      padding: 0;
  }
  
  ul, ol, li {
    list-style: none;
  }
  
  
  
  img {
      display: block;
      max-width: 100%;
      height: auto;
      }
`;

export const Container = styled.div `
  width: 600px;
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 2px 11px 3px rgba(0, 0, 0, 0.71);
  padding-top: 50px;
  padding-bottom: 30px;
`;