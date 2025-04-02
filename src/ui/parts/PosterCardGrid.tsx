import styled from 'styled-components';
import { motion } from 'motion/react';
import type { Movie } from '../../utils/api.types.ts';
import { makeImagePath } from '../../utils/api.ts';
import { useState } from 'react';

type PosterCardGridProps = {
  movie: Movie;
};

const PosterCardContainer = styled(motion.li)`
  width: 100%;
  height: auto;
  cursor: pointer;
  break-inside: avoid;
  position: relative;
  overflow: hidden;
`;

const PosterImage = styled.img.attrs({ loading: 'lazy' })`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const PosterOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.main};
  opacity: 0.8;
  color: ${(props) => props.theme.contrast};
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const UtilButtonContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const UtilButton = styled.div`
  color: ${(props) => props.theme.contrast};
  font-size: 27px;

  &:hover {
    color: red;
  }

  &:last-child:hover {
    text-decoration: underline;
  }
`;

function PosterCardGrid({ movie }: PosterCardGridProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <PosterCardContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <PosterImage
        src={makeImagePath(movie['poster_path'])}
        alt={movie['original_title']}
      />
      <PosterOverlay
        initial={{ x: '-100%' }}
        animate={{ x: isHovered ? 0 : '-100%' }}
        transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
      >
        <UtilButtonContainer>
          <UtilButton>Play</UtilButton>
          <UtilButton>Add to my picks</UtilButton>
          <UtilButton>Recommend</UtilButton>
          <UtilButton>Details</UtilButton>
        </UtilButtonContainer>
      </PosterOverlay>
    </PosterCardContainer>
  );
}

export default PosterCardGrid;
