import { useSuspenseQuery } from '@tanstack/react-query';
import { fetchComingSoon } from '../../utils/api.ts';

function ComingSoonMovieList() {
  const { data: comingSoonMovieList } = useSuspenseQuery({
    queryKey: ['coming-soon'],
    queryFn: fetchComingSoon
  });

  return (
    <ul>
      {comingSoonMovieList.results.map((movie) => (
        <li key={movie['id']}>{movie['original_title']}</li>
      ))}
    </ul>
  );
}

export default ComingSoonMovieList;
