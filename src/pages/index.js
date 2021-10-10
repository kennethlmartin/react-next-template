import { NextSeo } from 'next-seo';

import { Content } from 'src/components/Content';
import { Layout } from 'src/components/Layout';

const PageHome = () => (
  <Layout>
    <NextSeo title="Hello World" />
    <Content>
      <h1>Home</h1>
      <p>
        Beta crowdfunding rockstar marketing value proposition
        business-to-business stock iPhone equity advisor bootstrapping launch
        party agile development. Churn rate conversion metrics venture
        partnership crowdsource ramen growth hacking direct mailing
        non-disclosure agreement user experience seed money virality vesting
        period. Direct mailing MVP deployment release iPhone entrepreneur client
        churn rate product management influencer marketing. Creative
        entrepreneur customer investor crowdfunding infographic.
      </p>
    </Content>
  </Layout>
);

export default PageHome;
