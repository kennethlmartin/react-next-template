import styled from '@emotion/styled';
import Content from './Content';

const Footer = styled.footer`
  background-color: #dfdfdf;
  height: 100px;
  padding: 1em 0;
`;

const _Footer = () => (
  <Footer>
    <Content>{'Footer'}</Content>
  </Footer>
);

export default _Footer;
