import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchNowPlaying } from '../../utils/api.ts';

function NowPlayingMovieList() {
  const { data: nowPlayingMovieList } = useSuspenseQuery({
    queryKey: ['now-playing'],
    queryFn: fetchNowPlaying
  });

  return (
    <ul>
      {nowPlayingMovieList.results.map((movie) => (
        <li key={movie['id']}>{movie['original_title']}</li>
      ))}
    </ul>
  );
}

export default NowPlayingMovieList;
