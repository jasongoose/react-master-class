import { Outlet } from 'react-router';
import { useAtomValue } from 'jotai/react';
import styled from 'styled-components';
import { detailMovieModalOpenStatusAtom } from '../../atoms/detail.ts';
import DetailMovieModal from '../parts/DetailMovieModal.tsx';
import VerticalNavBar from '../parts/VerticalNavBar.tsx';

const MainArticle = styled.article<{ $isScrollable: boolean }>`
  max-width: 1200px;
  height: 100vh;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 3fr;
  padding: 10px;
  position: relative;
  overflow: ${(props) => (props.$isScrollable ? 'auto' : 'hidden')};
`;

const StickyNavWrapper = styled.div`
  position: sticky;
  top: 0;
`;

const Section = styled.section`
  height: 100%;
`;

const NavColumn = styled(Section)`
  position: relative;
  padding-right: 10px;
`;

function CommonLayout() {
  const isDetailMovieModalOpen = useAtomValue(detailMovieModalOpenStatusAtom);

  return (
    <>
      <MainArticle $isScrollable={!isDetailMovieModalOpen}>
        <NavColumn>
          <StickyNavWrapper as="nav">
            <VerticalNavBar />
          </StickyNavWrapper>
        </NavColumn>
        <Section>
          <Outlet />
        </Section>
      </MainArticle>
      {isDetailMovieModalOpen ? <DetailMovieModal /> : null}
    </>
  );
}

export default CommonLayout;
