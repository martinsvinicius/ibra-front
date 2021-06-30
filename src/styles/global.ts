import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --blue-500: #2E70AA;
    --blue-400: #5092D8;
    --blue-300: #69B2E2;
    --blue-200: #9FC9F0;
    --blue-100: #D7EAFE;

    --blue-active: #0096D8;

    --cyan-100: #8FDAE4;
    --cyan-50: #93D8E471;

    --black-500: #3A3A3A;
    --black-600: #3F3D56; 
    --gray: #515151;
    --gray-200: #4F4F4F;
    --gray-100: rgba(63, 61, 86, 0.65);

    --background-gray: #F8F8F8;
    --background-blue: #3EAEE0;
  }

  @media(max-width: 1590px) {
    html {
      font-size: 93.75%;
    }
  }

  @media(max-width: 1230px) {
    html {
      font-size: 90%;
    }
  }

  @media(max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background: var(--background-gray);
    color: var(--gray);
  }

  body, input, textarea, select, button {
    font: 400 1rem "Roboto", sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
