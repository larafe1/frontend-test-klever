import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body,
    input,
    button,
    textarea {
      border: none;
      outline: inherit;
    }

    button {
      cursor: pointer;
    }

    body {
      font-family: ${theme.fonts.family};
      font-size: ${theme.fonts.sizes.medium};

      color: ${theme.colors.text};
      background-color: ${theme.colors.background};
    }
  `}
`;
