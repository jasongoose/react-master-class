import styled from 'styled-components';
import type { Movie } from '../../utils/api.types.ts';
import { makeImagePath } from '../../utils/api.ts';

type PosterCardProps = {
  movie: Movie;
};

const Card = styled.li`
  width: 100%;
  height: auto;
  cursor: pointer;
  break-inside: avoid;
`;

const Image = styled.img.attrs({ loading: 'lazy' })`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

function PosterCard({ movie }: PosterCardProps) {
  return (
    <Card>
      <Image
        src={makeImagePath(movie['poster_path'])}
        alt={movie['original_title']}
      />
    </Card>
  );
}

export default PosterCard;
