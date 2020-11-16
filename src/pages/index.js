import Head from 'next/head';

import Content from '../components/Content';
import Layout from '../components/Layout';

const Home = () => (
  <Layout>
    <Head>
      <title>{'React Next Template'}</title>
      <link href="/favicon.ico" rel="icon" />
    </Head>
    <Content>{'HomePage'}</Content>
  </Layout>
);

export default Home;
