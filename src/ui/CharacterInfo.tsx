import {useSuspenseQuery} from "@tanstack/react-query";
import styled from "styled-components";
import {fetchCharacterDetail} from "../utils/api.ts";
import {LargeTitle} from "./parts/LargeTitle.tsx";
import * as Chip from './parts/Chip.tsx';
import * as CircleImage from './parts/CircleImage.tsx'

type Props = {
  id: number | string;
};

const CharacterInfoLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`


function CharacterInfo(props: Props) {
  const {data: characterInfoData} = useSuspenseQuery({
    queryKey: ['disney', 'character', props.id],
    queryFn: () => fetchCharacterDetail(props.id),
  });

  return (
      <CharacterInfoLayout>
        <LargeTitle>{characterInfoData['name']}</LargeTitle>
        <CircleImage.Container>
          <CircleImage.Image src={characterInfoData['imageUrl']} alt={characterInfoData['name']}/>
        </CircleImage.Container>
        <Chip.ChipGroup>
          {characterInfoData['films'].map((filmName) => (
              <Chip.ChipItem key={filmName}>{filmName}</Chip.ChipItem>
          ))}
        </Chip.ChipGroup>
      </CharacterInfoLayout>
  )
}

export default CharacterInfo;