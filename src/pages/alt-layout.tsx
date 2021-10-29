import type { GetStaticProps } from 'next';

import { NextSeo } from 'next-seo';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

import { Content } from 'src/components/Content';
import { renderAltLayout } from 'src/components/AltLayout';

const PageAltLayout = () => {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <>
      <NextSeo title={t('page-alt-layout:meta.title')} />
      <Content>
        <h1>{t('page-alt-layout:heading')}</h1>
        <p>{t('page-alt-layout:body')}</p>
        <button onClick={() => router.back()} type="button">
          Click here to go back
        </button>
      </Content>
    </>
  );
};

PageAltLayout.renderLayout = renderAltLayout;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const i18n = await serverSideTranslations(locale as string);

  return {
    props: {
      ...i18n,
    },
  };
};

export default PageAltLayout;
