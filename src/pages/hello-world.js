import { NextSeo } from 'next-seo';

import { Content } from 'src/components/Content';
import { Layout } from 'src/components/Layout';

const PageFoo = () => (
  <Layout>
    <NextSeo title="Hello World" />
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
