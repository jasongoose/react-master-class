import { useSuspenseQuery } from '@tanstack/react-query';
import { PosterCardGridGroup } from '../pieces/PosterCardGridGroup.tsx';
import { fetchNowPlaying } from '../../utils/api.ts';
import PosterCardGrid from '../parts/PosterCardGrid.tsx';

function NowPlayingMovieList() {
  const { data: nowPlayingMovieList } = useSuspenseQuery({
    queryKey: ['now-playing'],
    queryFn: fetchNowPlaying
  });

  return (
    <PosterCardGridGroup>
      {nowPlayingMovieList.results.map((movie) => (
        <PosterCardGrid key={movie['id']} movie={movie} />
      ))}
    </PosterCardGridGroup>
  );
}

export default NowPlayingMovieList;
