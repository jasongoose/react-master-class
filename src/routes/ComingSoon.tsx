import { Suspense } from 'react';
import Loader from '../ui/pieces/Loader.tsx';
import ComingSoonMovieList from '../ui/contents/ComingSoonMovieList.tsx';

function ComingSoon() {
  return (
    <>
      <h1>Coming Soon</h1>
      {/* TODO:: ErrorBoundary 적용해볼 것 */}
      <Suspense fallback={<Loader />}>
        <ComingSoonMovieList />
      </Suspense>
    </>
  );
}

export default ComingSoon;
