import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@emotion/react';
import { useSelector } from 'react-redux';

import GlobalStyles from 'src/components/GlobalStyles';
import themes from 'src/themes';
import { wrapper } from 'src/state/store';
import { selectTheme } from 'src/state/selectors';

const App = ({ Component, pageProps }) => {
  const theme = useSelector(selectTheme);

  return (
    <ThemeProvider theme={themes[theme]}>
      <Head>
        <title>React Next Template</title>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <GlobalStyles />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

App.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
};

export default wrapper.withRedux(App);
