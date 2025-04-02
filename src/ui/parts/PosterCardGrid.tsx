import styled from 'styled-components';
import { motion } from 'motion/react';
import type { Movie } from '../../utils/api.types.ts';
import { makeImagePath } from '../../utils/api.ts';

type PosterCardGridProps = {
  movie: Movie;
};

const PosterCardContainer = styled(motion.li)`
  width: 100%;
  height: auto;
  cursor: pointer;
  break-inside: avoid;
  position: relative;
`;

const PosterImage = styled.img.attrs({ loading: 'lazy' })`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

function PosterCardGrid({ movie }: PosterCardGridProps) {
  return (
    <PosterCardContainer>
      <PosterImage
        src={makeImagePath(movie['poster_path'])}
        alt={movie['original_title']}
      />
    </PosterCardContainer>
  );
}

export default PosterCardGrid;
