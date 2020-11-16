import styled from '@emotion/styled';
import Content from './Content';

const Header = styled.header`
  background-color: #dfdfdf;
  height: 100px;
  padding: 1em 0;
`;

const _Header = () => (
  <Header>
    <Content>{'Header'}</Content>
  </Header>
);

export default _Header;
