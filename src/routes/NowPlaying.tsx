import { Suspense } from 'react';
import Loader from '../ui/pieces/Loader.tsx';
import NowPlayingMovieList from '../ui/contents/NowPlayingMovieList.tsx';

function NowPlaying() {
  return (
    <>
      <h1>Now Playing</h1>
      {/* TODO:: ErrorBoundary 적용해볼 것 */}
      <Suspense fallback={<Loader />}>
        <NowPlayingMovieList />
      </Suspense>
    </>
  );
}

export default NowPlaying;
