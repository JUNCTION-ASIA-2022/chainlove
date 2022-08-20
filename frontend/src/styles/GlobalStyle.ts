import { createGlobalStyle } from 'styled-components';

import { font } from './theme';

import Normalize from '@/styles/Normalize';

const GlobalStyle = createGlobalStyle`
  ${Normalize}

  * {
    font-family: ${font.family};
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background: ${({ theme: { color } }) => color.background};
  }
  
  button,
  input,
  select,
  textarea {
    background-color: transparent;
    border: 0;
    &:focus {
      outline: none;
      box-shadow: none;
    }
  }

  a,
  button {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    :focus {
      outline: none;
    }
  }
  
  ul,
  li {
    padding: 0;
    list-style: none;
  }
`;

export default GlobalStyle;
