import styled from '@emotion/styled';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'next-i18next';

import { themeSelected } from 'src/state/actions';
import { selectTheme } from 'src/state/selectors';

const Toggle = styled.span`
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector(selectTheme);
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
