import type { GetStaticProps } from 'next';

import { NextSeo } from 'next-seo';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import { Content } from 'src/components/Content';

const PageHelloWorld = () => {
  const { t } = useTranslation();

  return (
    <>
      <NextSeo title={t('page-hello-world:meta.title')} />
      <Content>
        <h1>{t('page-hello-world:heading')}</h1>
        <p>{t('page-hello-world:body')}</p>
      </Content>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const i18n = await serverSideTranslations(locale as string);

  return {
    props: {
      ...i18n,
    },
  };
};

export default PageHelloWorld;
