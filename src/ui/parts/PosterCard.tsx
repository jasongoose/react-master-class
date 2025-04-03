import styled from 'styled-components';
import { motion } from 'motion/react';
import { useState } from 'react';
import { useSetAtom } from 'jotai';
import type { Movie } from '../../utils/api.types.ts';
import { makeImagePath } from '../../utils/api.ts';
import { detailMovieIdAtom } from '../../atoms/detail.ts';
import { Overlay } from '../pieces/Overlay.tsx';

type PosterCardGridProps = {
  movie: Movie;
};

const PosterCardContainer = styled(motion.li)`
  width: 100%;
  height: auto;
  break-inside: avoid;
  position: relative;
  overflow: hidden;
`;

const PosterImage = styled.img.attrs({ loading: 'lazy' })`
  width: 100%;
  height: auto;
  object-fit: cover;
`;

const PosterOverlay = styled(Overlay)`
  padding: 16px;
  display: flex;
  flex-direction: column;
`;

const UtilButtonContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
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
    cursor: pointer;
  }
`;

function PosterCard({ movie }: PosterCardGridProps) {
  const setDetailMovieId = useSetAtom(detailMovieIdAtom);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleDetailsButtonClick = () => {
    setDetailMovieId(movie['id']);
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
        $opacity={0.8}
        initial={{ x: '-100%' }}
        animate={{ x: isHovered ? 0 : '-100%' }}
        transition={{ type: 'tween', duration: 0.3, ease: 'easeInOut' }}
      >
        <UtilButtonContainer>
          <UtilButton>Play</UtilButton>
          <UtilButton>Add to my picks</UtilButton>
          <UtilButton>Recommend</UtilButton>
          <UtilButton onClick={handleDetailsButtonClick}>Details</UtilButton>
        </UtilButtonContainer>
      </PosterOverlay>
    </PosterCardContainer>
  );
}

export default PosterCard;
