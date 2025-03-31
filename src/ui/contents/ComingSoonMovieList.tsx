import { useSuspenseQuery } from '@tanstack/react-query';
import { PosterCardGroup } from '../pieces/PosterCardGroup.tsx';
import { fetchComingSoon } from '../../utils/api.ts';
import PosterCard from '../parts/PosterCard.tsx';

function ComingSoonMovieList() {
  const { data: comingSoonMovieList } = useSuspenseQuery({
    queryKey: ['coming-soon'],
    queryFn: fetchComingSoon
  });

  return (
    <PosterCardGroup>
      {comingSoonMovieList.results.map((movie) => (
        <PosterCard key={movie['id']} movie={movie} />
      ))}
    </PosterCardGroup>
  );
}

export default ComingSoonMovieList;
