import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { Content } from 'src/components/Content';

const Wrapper = styled.footer`
  background-color: ${(props) => props.theme.colors[200]};
  height: 100px;
  padding: 1em 0;
`;

export const Footer = () => (
  <Wrapper
    css={css`
      text-align: center;
    `}
  >
    <Content>Footer</Content>
  </Wrapper>
);
