import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import { useAtom } from 'jotai';
import { motion } from 'motion/react';
import { Overlay } from '../pieces/Overlay.tsx';
import { detailMovieIdAtom } from '../../atoms/detail.ts';
import { fetchMovie, makeBgPath } from '../../utils/api.ts';
import Loader from '../pieces/Loader.tsx';

const ModalOverlay = styled(Overlay)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DetailMovieModalContainer = styled(motion.div)`
  width: 40%;
  height: 90%;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.main};
  position: relative;
  overflow: hidden;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 40%;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    ${(props) => props.theme.mainBlur}
  );
  position: relative;
`;

const ModalBackgroundImage = styled.img`
  width: 100%;
  height: auto;
`;

const GradientOverlay = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    ${(props) => props.theme.main}
  );
  position: absolute;
  top: 0;
  left: 0;
`;

const DetailMovieContents = styled.div`
  width: 100%;
  height: 60%;
  background-color: ${(props) => props.theme.main};
  position: absolute;
  bottom: 0;
`;

function DetailMovieModal() {
  const [detailMovieId, setDetailMovieId] = useAtom(detailMovieIdAtom);

  const { data: detailMovie, isLoading: isDetailMovieLoading } = useQuery({
    queryKey: ['movie', detailMovieId],
    queryFn: () => fetchMovie(detailMovieId!),
    enabled: detailMovieId !== null
  });

  const handleOverlayClick = () => {
    setDetailMovieId(null);
  };

  return (
    <ModalOverlay $opacity={0.5} onClick={handleOverlayClick}>
      {isDetailMovieLoading ? (
        <Loader />
      ) : (
        <DetailMovieModalContainer>
          <ImageWrapper>
            <ModalBackgroundImage
              src={makeBgPath(detailMovie?.poster_path ?? '')}
              alt={detailMovie?.original_title ?? ''}
            />
            <GradientOverlay />
          </ImageWrapper>
          <DetailMovieContents />
        </DetailMovieModalContainer>
      )}
    </ModalOverlay>
  );
}

export default DetailMovieModal;
