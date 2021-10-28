import type { GetStaticProps } from 'next';

import { NextSeo } from 'next-seo';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import { Content } from 'src/components/Content';

const PageHome = () => {
  const { t } = useTranslation();

  return (
    <>
      <NextSeo title={t('page-home:meta.title')} />
      <Content>
        <h1>{t('page-home:heading')}</h1>
        <p>{t('page-home:body')}</p>
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

export default PageHome;
