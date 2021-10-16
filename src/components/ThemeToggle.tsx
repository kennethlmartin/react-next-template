import styled from '@emotion/styled';
import { useTranslation } from 'next-i18next';

import { themeSelected } from 'src/state/actions';
import { selectTheme } from 'src/state/selectors';
import { useAppDispatch, useAppSelector } from 'src/hooks';

const Toggle = styled.span`
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const ThemeToggle = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectTheme);
  const { t } = useTranslation();

  const handleClick = () => {
    if (theme === 'light') {
      dispatch(themeSelected('dark'));
    } else {
      dispatch(themeSelected('light'));
    }
  };

  return <Toggle onClick={handleClick}>{t(`common:theme.${theme}`)}</Toggle>;
};
