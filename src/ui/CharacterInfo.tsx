import {useSuspenseQuery} from "@tanstack/react-query";
import styled from "styled-components";
import {Link} from "react-router";
import {fetchCharacterDetail} from "../utils/api.ts";
import {LargeTitle} from "./styled/LargeTitle.tsx";
import * as Chip from './styled/Chip.tsx';
import * as CircleImage from './styled/CircleImage.tsx'
import {SizedSpace} from "./styled/SizedSpace.tsx";
import IconLocationDot from "./parts/icon/IconLocationDot.tsx";
import ExpandableButton from "./parts/ExpandableButton.tsx";
import IconLeftArrow from "./parts/icon/IconLeftArrow.tsx";


type Props = {
  id: number | string;
};

const CharacterInfoLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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
        <SizedSpace size={30}/>
        <Chip.ChipGroup>
          {characterInfoData['films'].map((filmName) => (
              <Chip.ChipItem key={filmName}>{filmName}</Chip.ChipItem>
          ))}
        </Chip.ChipGroup>
        <SizedSpace size={60}/>
        <Link to="/">
          <ExpandableButton fontSize={40} maxWidth={120} buttonText="Back to home"
                            icon={<IconLeftArrow size={40}/>}/>
        </Link>
        <SizedSpace size={30}/>
        <a href={characterInfoData['sourceUrl']}>
          <ExpandableButton fontSize={40} maxWidth={120} buttonText={"Go to source"}
                            icon={<IconLocationDot size={40}/>}/>
        </a>
      </CharacterInfoLayout>
  )
}

export default CharacterInfo;