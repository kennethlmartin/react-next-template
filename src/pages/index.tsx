import type { GetStaticProps } from 'next';

import { NextSeo } from 'next-seo';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import { Content } from 'src/components/Content';
import { Layout } from 'src/components/Layout';

const PageHome = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <NextSeo title={t('page-home:meta.title')} />
      <Content>
        <h1>{t('page-home:heading')}</h1>
        <p>{t('page-home:body')}</p>
      </Content>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const i18n = await serverSideTranslations(locale);

  return {
    props: {
      ...i18n,
    },
  };
};

export default PageHome;
