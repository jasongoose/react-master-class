import {useSuspenseQuery} from "@tanstack/react-query";
import {fetchCharacterDetail} from "../utils/api.ts";

type Props = {
  id: number | string;
}

function CharacterInfo(props: Props) {
  const {data: disneyCharacterInfo} = useSuspenseQuery({
    queryKey: ['disney', 'character', props.id],
    queryFn: () => fetchCharacterDetail(props.id),
  });

  return (
      <h2>{disneyCharacterInfo['name']}</h2>
  )
}

export default CharacterInfo;