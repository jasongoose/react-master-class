import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchPopular } from '../../utils/api.ts';
import { PosterCardGridGroup } from '../pieces/PosterCardGridGroup.tsx';
import PosterCardGrid from '../parts/PosterCardGrid.tsx';

function PopularMovieList() {
  const { data: popularMovieList } = useSuspenseQuery({
    queryKey: ['popular'],
    queryFn: fetchPopular
  });

  return (
    <PosterCardGridGroup>
      {popularMovieList.results.map((movie) => (
        <PosterCardGrid key={movie['id']} movie={movie} />
      ))}
    </PosterCardGridGroup>
  );
}

export default PopularMovieList;
