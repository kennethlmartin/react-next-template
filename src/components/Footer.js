import styled from '@emotion/styled';
import { css } from '@emotion/react';

import Content from './Content';

const Footer = styled.footer`
  background-color: ${(props) => props.theme.colors[200]};
  height: 100px;
  padding: 1em 0;
`;

const _Footer = () => (
  <Footer
    css={css`
      text-align: center;
    `}
  >
    <Content>Footer</Content>
  </Footer>
);

export default _Footer;
