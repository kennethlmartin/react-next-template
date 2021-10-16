import Link from 'next/link';
import styled from '@emotion/styled';
import { useTranslation } from 'next-i18next';

import { Content } from 'src/components/Content';
import { ThemeToggle } from 'src/components/ThemeToggle';

const Wrapper = styled.header`
  background-color: ${(props) => props.theme.colors[200]};
  padding: 1em 0;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`;

const List = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  padding: 0 1em;
`;

export const Header = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Content>
        <Nav>
          <Link href="/">
            <a>{t('header:home')}</a>
          </Link>
          <List>
            <ListItem>
              <Link href="/hello-world">
                <a>{t('header:helloWorld')}</a>
              </Link>
            </ListItem>
          </List>
          <ThemeToggle />
        </Nav>
      </Content>
    </Wrapper>
  );
};
