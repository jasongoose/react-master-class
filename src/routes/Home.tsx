import { Suspense } from 'react';
import Loader from '../ui/pieces/Loader.tsx';
import PopularMovieList from '../ui/contents/PopularMovieList.tsx';

function Home() {
  return (
    <>
      <h1>Popular</h1>
      {/* TODO:: ErrorBoundary 적용해볼 것 */}
      <Suspense fallback={<Loader />}>
        <PopularMovieList />
      </Suspense>
    </>
  );
}

export default Home;
