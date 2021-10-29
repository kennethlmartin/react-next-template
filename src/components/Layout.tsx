import type { ReactElement } from 'react';

import styled from '@emotion/styled';

import { Footer } from 'src/components/Footer';
import { Header } from 'src/components/Header';

const Main = styled.main`
  flex: 1;
  padding: 1em 0;
`;

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => (
  <>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </>
);

export const renderLayout = (page: ReactElement) => <Layout>{page}</Layout>;
