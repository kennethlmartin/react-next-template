import Link from 'next/link';
import styled from '@emotion/styled';

import Content from './Content';
import ThemeToggle from './ThemeToggle';

const Header = styled.header`
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

const _Header = () => (
  <Header>
    <Content>
      <Nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <List>
          <ListItem>
            <Link href="/hello-world">
              <a>Hello World</a>
            </Link>
          </ListItem>
        </List>
        <ThemeToggle />
      </Nav>
    </Content>
  </Header>
);

export default _Header;
