import { Suspense } from 'react';
import Loader from '../ui/pieces/Loader.tsx';
import ComingSoonMovieList from '../ui/contents/ComingSoonMovieList.tsx';

function ComingSoon() {
  return (
    <Suspense fallback={<Loader />}>
      <ComingSoonMovieList />
    </Suspense>
  );
}

export default ComingSoon;
