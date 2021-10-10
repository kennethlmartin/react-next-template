import Head from 'next/head';

import { Content } from 'src/components/Content';
import { Layout } from 'src/components/Layout';

const PageFoo = () => (
  <Layout>
    <Head>
      <title>Hello World</title>
    </Head>
    <Content>
      <h1>Hello World</h1>
      <p>
        Hackathon gamification monetization low hanging fruit strategy customer.
        Prototype direct mailing business-to-business funding early adopters
        market infrastructure A/B testing assets marketing. Freemium sales
        bootstrapping infrastructure android vesting period deployment
        disruptive. Investor interaction design buyer direct mailing metrics
        responsive web design.
      </p>
    </Content>
  </Layout>
);

export default PageFoo;
