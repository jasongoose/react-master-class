import { Outlet } from 'react-router';
import { useAtomValue } from 'jotai/react';
import { detailMovieModalOpenStatusAtom } from '../../atoms/detail.ts';
import DetailMovieModal from '../parts/DetailMovieModal.tsx';

function PageLayout() {
  const isDetailMovieModalOpen = useAtomValue(detailMovieModalOpenStatusAtom);

  return (
    <article
      style={{
        maxWidth: '1200px',
        height: '100vh',
        margin: '0 auto'
      }}
    >
      <Outlet />
      {isDetailMovieModalOpen ? <DetailMovieModal /> : null}
    </article>
  );
}

export default PageLayout;
