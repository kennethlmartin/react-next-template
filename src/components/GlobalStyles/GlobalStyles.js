import { Global, css, withTheme } from '@emotion/react';
import normalize from './normalize';

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
    background-color: ${theme.backgroundColor};
    color: ${theme.color};
    font-family: ${theme.fontFamily};
  }

  #__next {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    min-width: 100vw;
  }
`;

export default withTheme(({ theme }) => (
  <Global styles={makeGlobalStyles(theme)} />
));