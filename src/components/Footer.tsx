import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { useTranslation } from 'next-i18next';

import { Content } from 'src/components/Content';

const Wrapper = styled.footer`
  background-color: ${(props) => props.theme.colors[200]};
  height: 100px;
  padding: 1em 0;
`;

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <Wrapper
      // used as an example for the `css` function
      css={css`
        text-align: center;
      `}
    >
      <Content>{t('footer:footer')}</Content>
    </Wrapper>
  );
};
