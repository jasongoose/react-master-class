import { useSuspenseQuery } from '@tanstack/react-query';
import { PosterCardGridGroup } from '../pieces/PosterCardGridGroup.tsx';
import { fetchComingSoon } from '../../utils/api.ts';
import SamplePosterCard from '../parts/SamplePosterCard.tsx';

function ComingSoonMovieList() {
  const { data: comingSoonMovieList } = useSuspenseQuery({
    queryKey: ['coming-soon'],
    queryFn: fetchComingSoon
  });

  return (
    <PosterCardGridGroup>
      {comingSoonMovieList.results.map((movie) => (
        <SamplePosterCard key={movie['id']} movie={movie} />
      ))}
    </PosterCardGridGroup>
  );
}

export default ComingSoonMovieList;
