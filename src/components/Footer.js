import styled from '@emotion/styled';
import { css } from '@emotion/react';

import Content from 'src/components/Content';

const Footer = styled.footer`
  background-color: ${(props) => props.theme.colors[200]};
  height: 100px;
  dpadding: 1em 0;
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
