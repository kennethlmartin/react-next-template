import { Global, css, withTheme } from '@emotion/react';
import { normalize } from './normalize';

const makeGlobalStyles = (theme) => css`
  ${normalize}

  html {
    box-sizing: border-box;
    height: 100%;
    overflow: hidden;
    width: 100%;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    background-color: ${theme.colors[50]};
    color: ${theme.colors[800]};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  }

  a {
    color: ${theme.colors[800]};
  }

  #__next {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    min-width: 100vw;
  }
`;

export const GlobalStyles = withTheme(({ theme }) => (
  <Global styles={makeGlobalStyles(theme)} />
));
