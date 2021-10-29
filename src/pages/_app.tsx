import type { AppProps } from 'next/app';
import type { NextPage } from 'next';
import type { ReactElement, ReactNode } from 'react';

import * as R from 'ramda';
import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from '@emotion/react';

import * as themes from 'src/themes';
import NextSeoConfig from 'next-seo.config';
import { GlobalStyles } from 'src/components/GlobalStyles';
import { renderLayout as renderDefaultLayout } from 'src/components/Layout';
import { selectTheme } from 'src/state/selectors';
import { useAppSelector } from 'src/hooks';
import { wrapper } from 'src/state/store';

type NextPageWithLayout = NextPage & {
  renderLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const renderLayout = Component.renderLayout || renderDefaultLayout;
  const theme = useAppSelector(selectTheme);

  return (
    <ThemeProvider theme={themes[theme]}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <DefaultSeo {...NextSeoConfig} />
      <Head>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <GlobalStyles />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      {renderLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  );
};

export default R.compose(wrapper.withRedux, appWithTranslation)(App);
