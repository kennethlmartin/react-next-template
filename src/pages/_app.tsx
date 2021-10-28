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
import { Layout } from 'src/components/Layout';
import { selectTheme } from 'src/state/selectors';
import { useAppSelector } from 'src/hooks';
import { wrapper } from 'src/state/store';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const theme = useAppSelector(selectTheme);

  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);

  return (
    <ThemeProvider theme={themes[theme]}>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <DefaultSeo {...NextSeoConfig} />
      <Head>
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <GlobalStyles />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  );
};

export default R.compose(wrapper.withRedux, appWithTranslation)(App);
