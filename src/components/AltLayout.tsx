import type { ReactElement } from 'react';

import styled from '@emotion/styled';

import { Footer } from 'src/components/Footer';

const Main = styled.main`
  flex: 1;
`;

interface Props {
  children: React.ReactNode;
}

export const AltLayout = ({ children }: Props) => (
  <>
    <Main>{children}</Main>
    <Footer />
  </>
);

export const renderAltLayout = (page: ReactElement) => (
  <AltLayout>{page}</AltLayout>
);
