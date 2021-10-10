import { NextSeo } from 'next-seo';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import { Content } from 'src/components/Content';
import { Layout } from 'src/components/Layout';

const PageHelloWorld = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <NextSeo title={t('page-hello-world:meta.title')} />
      <Content>
        <h1>{t('page-hello-world:heading')}</h1>
        <p>{t('page-hello-world:body')}</p>
      </Content>
    </Layout>
  );
};

export const getStaticProps = async ({ locale }) => {
  const i18n = await serverSideTranslations(locale);

  return {
    props: {
      ...i18n,
    },
  };
};

export default PageHelloWorld;
