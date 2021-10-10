import * as R from 'ramda';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from '@emotion/react';
import { useSelector } from 'react-redux';

import * as themes from 'src/themes';
import NextSeoConfig from 'next-seo.config';
import { GlobalStyles } from 'src/components/GlobalStyles';
import { selectTheme } from 'src/state/selectors';
import { wrapper } from 'src/state/store';

const App = ({ Component, pageProps }) => {
  const theme = useSelector(selectTheme);

  return (
    <ThemeProvider theme={themes[theme]}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <DefaultSeo {...NextSeoConfig} />
      <Head>
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

export default R.compose(wrapper.withRedux, appWithTranslation)(App);
