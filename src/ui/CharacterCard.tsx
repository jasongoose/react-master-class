import styled from "styled-components";
import {DisneyCharacter} from "../utils/api.ts";
import {useState} from "react";

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
  break-inside: avoid; /* 이미지가 컬럼 사이에서 분리되는 것을 방지 */
  min-height: 100px; /* 이미지가 로드되기 전 최소 높이 */
  background-color: #f0f0f0; /* 로딩 전 배경색 */
`;

const Image = styled.img<ImageProps>`
  width: 100%;
  height: auto;
  display: block;
  border-radius: 10px;
  opacity: ${props => props.$isLoaded ? 1 : 0};
  transition: opacity 0.3s ease-in-out;
  cursor: pointer;
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
      </Card>
  )
}

export default CharacterCard;