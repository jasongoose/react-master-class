import styled from 'styled-components';
import { motion } from 'motion/react';
import { useState } from 'react';
import type { Movie } from '../../utils/api.types.ts';
import { makeImagePath } from '../../utils/api.ts';

type PosterCardProps = {
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

const MoviePreview = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  background: rgba(0, 0, 0, 0.8);
  color: white;
`;

function SamplePosterCard({ movie }: PosterCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleHoverStart = () => {
    setIsHovered(true);
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
  };

  return (
    <PosterCardContainer
      whileHover={{ scale: 1.5, zIndex: 10 }}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
    >
      {isHovered ? (
        <MoviePreview
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
        >
          <p>{movie['title']}</p>
        </MoviePreview>
      ) : (
        <PosterImage
          src={makeImagePath(movie['poster_path'])}
          alt={movie['original_title']}
        />
      )}
    </PosterCardContainer>
  );
}

export default SamplePosterCard;
