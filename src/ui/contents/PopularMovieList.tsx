import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchPopular } from '../../utils/api.ts';
import SamplePosterCard from '../parts/SamplePosterCard.tsx';
import { PosterCardGroup } from '../pieces/PosterCardGroup.tsx';

function PopularMovieList() {
  const { data: popularMovieList } = useSuspenseQuery({
    queryKey: ['popular'],
    queryFn: fetchPopular
  });

  return (
    <PosterCardGroup>
      {popularMovieList.results.map((movie) => (
        <SamplePosterCard key={movie['id']} movie={movie} />
      ))}
    </PosterCardGroup>
  );
}

export default PopularMovieList;
