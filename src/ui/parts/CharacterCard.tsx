import styled from "styled-components";
import {useState} from "react";
import {DisneyCharacter} from "../../utils/api.ts";
import * as Overlay from "../styled/Overlay.tsx";

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

  &:hover {
    ${Overlay.Dimmed} {
      opacity: 1;
    }
  }
`;

const Image = styled.img.attrs({loading: 'lazy'})<ImageProps>`
  width: 100%;
  height: auto;
  display: block;
  border-radius: 10px;
  opacity: ${(props) => props.$isLoaded ? 1 : 0};
  transition: opacity 0.3s ease-in-out;
`;


function CharacterCard({character}: CharacterCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsLoaded(true);
  }

  return (
      <Card>
        <Image src={character['imageUrl']} alt={character['name']} $isLoaded={isLoaded}
               onLoad={handleImageLoad}/>
        <Overlay.Dimmed>
          <Overlay.TextContainer>
            <Overlay.Text fontSize={30}>{character['name']}</Overlay.Text>
          </Overlay.TextContainer>
        </Overlay.Dimmed>
      </Card>
  )
}

export default CharacterCard;