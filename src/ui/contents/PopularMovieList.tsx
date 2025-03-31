import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchPopular } from '../../utils/api.ts';
import PosterCard from '../parts/PosterCard.tsx';
import { PosterCardGroup } from '../pieces/PosterCardGroup.tsx';

function PopularMovieList() {
  const { data: popularMovieList } = useSuspenseQuery({
    queryKey: ['popular'],
    queryFn: fetchPopular
  });

  return (
    <PosterCardGroup>
      {popularMovieList.results.map((movie) => (
        <PosterCard key={movie['id']} movie={movie} />
      ))}
    </PosterCardGroup>
  );
}

export default PopularMovieList;
