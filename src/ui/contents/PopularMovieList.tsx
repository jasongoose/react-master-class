import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchPopular } from '../../utils/api.ts';

function PopularMovieList() {
  const { data: popularMovieList } = useSuspenseQuery({
    queryKey: ['popular'],
    queryFn: fetchPopular
  });

  return (
    <ul>
      {popularMovieList.results.map((movie) => (
        <li key={movie['id']}>{movie['original_title']}</li>
      ))}
    </ul>
  );
}

export default PopularMovieList;
