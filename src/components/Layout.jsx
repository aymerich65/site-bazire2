import styled from 'styled-components';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

const LayoutContainer = styled.div`
  overflow-x: hidden; /* Empêche le défilement horizontal */
  margin: 0;
  padding: 0;
`;

export default function Layout({ mainContent }) {
  return (
    <LayoutContainer>
      <Header />
      <Main>{mainContent}</Main>
      <Footer />
    </LayoutContainer>
  );
}
