import { Suspense } from 'react';
import Loader from '../ui/pieces/Loader.tsx';
import PopularMovieList from '../ui/contents/PopularMovieList.tsx';

function Home() {
  return (
    <Suspense fallback={<Loader />}>
      <PopularMovieList />
    </Suspense>
  );
}

export default Home;
