import { useQuery } from '@tanstack/react-query';
import styled from 'styled-components';
import { useAtom } from 'jotai';
import { motion } from 'motion/react';
import { Overlay } from '../pieces/Overlay.tsx';
import { detailMovieIdAtom } from '../../atoms/detail.ts';
import { fetchMovie, makeBgPath } from '../../utils/api.ts';
import Loader from '../pieces/Loader.tsx';
import {
  calcMinutesLeft,
  calcMinutesToHours,
  numberWithComma
} from '../../utils/format.ts';

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
  color: ${(props) => props.theme.contrast};
  position: absolute;
  bottom: 0;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: auto;

  h1 {
    font-size: 100px;
  }

  p {
    font-size: 30px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 5px;
    li {
      font-size: 20px;
    }
  }

  span {
    display: block;
    width: fit-content;
    justify-self: flex-end;
    text-align: right;
    font-size: 20px;
    color: ${(props) => props.theme.contrast};
    &:hover {
      text-decoration: underline;
      cursor: pointer;
      color: red;
    }
  }
`;

const CloseButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

function DetailMovieModal() {
  const [detailMovieId, setDetailMovieId] = useAtom(detailMovieIdAtom);

  const { data: detailMovie, isLoading: isDetailMovieLoading } = useQuery({
    queryKey: ['movie', detailMovieId],
    queryFn: () => fetchMovie(detailMovieId!),
    enabled: detailMovieId !== null
  });

  const handleCloseTextClick = () => {
    setDetailMovieId(null);
  };

  return (
    <ModalOverlay $opacity={0.5}>
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
          <DetailMovieContents>
            <h1>{detailMovie?.title}</h1>
            <p>{detailMovie?.overview}</p>
            <ul>
              <li>Budget: ${numberWithComma(detailMovie?.budget ?? '')}</li>
              <li>Revenue: ${numberWithComma(detailMovie?.revenue ?? '')}</li>
              <li>
                Runtime:{' '}
                {`${calcMinutesToHours(detailMovie?.runtime ?? 0)}H ${calcMinutesLeft(detailMovie?.runtime ?? 0)}M`}
              </li>
              <li>Rating: {detailMovie?.vote_average}</li>
            </ul>
            <CloseButtonWrapper>
              <span onClick={handleCloseTextClick}>Close</span>
            </CloseButtonWrapper>
          </DetailMovieContents>
        </DetailMovieModalContainer>
      )}
    </ModalOverlay>
  );
}

export default DetailMovieModal;
