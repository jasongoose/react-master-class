import { useSuspenseQuery } from '@tanstack/react-query';
import { PosterCardGroup } from '../pieces/PosterCardGroup.tsx';
import { fetchNowPlaying } from '../../utils/api.ts';
import SamplePosterCard from '../parts/SamplePosterCard.tsx';

function NowPlayingMovieList() {
  const { data: nowPlayingMovieList } = useSuspenseQuery({
    queryKey: ['now-playing'],
    queryFn: fetchNowPlaying
  });

  return (
    <PosterCardGroup>
      {nowPlayingMovieList.results.map((movie) => (
        <SamplePosterCard key={movie['id']} movie={movie} />
      ))}
    </PosterCardGroup>
  );
}

export default NowPlayingMovieList;
