import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Fragment } from 'react';

import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

const Main = styled.main`
  flex: 1;
  padding: 1em 0;
`;

const Layout = ({ children }) => (
  <Fragment>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </Fragment>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
