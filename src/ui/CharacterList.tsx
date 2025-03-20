import {useSuspenseQuery} from "@tanstack/react-query";
import {fetchDisneyCharacters} from "../utils/api.ts";

function CharacterList() {
  const {data: disneyCharacterList} = useSuspenseQuery({
    queryKey: ['disney', 'characters'],
    queryFn: fetchDisneyCharacters,
  });

  return (
      <ul>
        {disneyCharacterList.map((character) => (<li key={character['id']}>{character['name']}</li>))}
      </ul>
  );
}

export default CharacterList;