import styled from "styled-components";
import {useState} from "react";
import {DisneyCharacter} from "../../utils/api.ts";
import {Dimmed as OverlayDimmed} from "../pieces/Dimmed.tsx";

type CharacterCardProps = {
  character: DisneyCharacter;
}

type ImageProps = {
  $isLoaded: boolean;
}

const Card = styled.li`
  display: inline-block;
  width: 100%;
  margin-bottom: 10px;
  min-width: 100px;
  min-height: 100px;
  background-color: #f0f0f0;
  border-radius: 10px;
  position: relative;
  cursor: pointer;
  break-inside: avoid;

  ${OverlayDimmed} {
    border-radius: 10px;
  }

  &:hover {
    ${OverlayDimmed} {
      opacity: 1;
    }
  }
`;

const Image = styled.img.attrs({loading: 'lazy'})<ImageProps>`
  width: 100%;
  //height: auto;
  min-height: 100px;
  display: block;
  border-radius: 10px;
  opacity: ${(props) => props.$isLoaded ? 1 : 0};
  transition: opacity 0.3s ease-in-out;
  object-fit: cover;
`;

const OverlayTextContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const OverlayText = styled.span<{ fontSize: number }>`
  color: white;
  font-size: ${(props) => props.fontSize + 'px'};
`

function CharacterCard({character}: CharacterCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  }

  return (
      <Card>
        <Image src={character['imageUrl']} alt={character['name']} $isLoaded={isLoaded}
               onLoad={handleImageLoad}/>
        <OverlayDimmed>
          <OverlayTextContainer>
            <OverlayText fontSize={30}>{character['name']}</OverlayText>
          </OverlayTextContainer>
        </OverlayDimmed>
      </Card>
  )
}

export default CharacterCard;