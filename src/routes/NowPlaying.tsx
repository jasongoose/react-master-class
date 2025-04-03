import { Suspense } from 'react';
import Loader from '../ui/pieces/Loader.tsx';
import NowPlayingMovieList from '../ui/contents/NowPlayingMovieList.tsx';

function NowPlaying() {
  return (
    <Suspense fallback={<Loader />}>
      <NowPlayingMovieList />
    </Suspense>
  );
}

export default NowPlaying;
