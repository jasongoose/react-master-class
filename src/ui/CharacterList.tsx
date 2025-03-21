import {useSuspenseQuery} from "@tanstack/react-query";
import styled from "styled-components";
import {fetchDisneyCharacters} from "../utils/api.ts";
import CharacterCard from "./CharacterCard.tsx";

const CharacterListLayout = styled.ul`
  column-count: 5; /* 최대 5개 컬럼 */
  column-gap: 10px;
  max-width: 60%;

  /* 반응형 처리 */
  @media (max-width: 1200px) {
    column-count: 4; /* 4개 컬럼 */
  }

  @media (max-width: 900px) {
    column-count: 3; /* 3개 컬럼 */
  }

  @media (max-width: 600px) {
    column-count: 2; /* 2개 컬럼 */
  }

  @media (max-width: 400px) {
    column-count: 1; /* 1개 컬럼 */
  }
`;

function CharacterList() {
  const {data: disneyCharacterList} = useSuspenseQuery({
    queryKey: ['disney', 'characters'],
    queryFn: fetchDisneyCharacters,
  });

  return (
      <CharacterListLayout>
        {disneyCharacterList.map((character) => (
            <CharacterCard key={character['id']} character={character}/>
        ))}
      </CharacterListLayout>
  );
}

export default CharacterList;