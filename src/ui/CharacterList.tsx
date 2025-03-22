import {useSuspenseQuery} from "@tanstack/react-query";
import styled from "styled-components";
import {fetchDisneyCharacters} from "../utils/api.ts";
import CharacterCard from "./parts/CharacterCard.tsx";
import {Link} from "react-router";
import {LargeTitle} from "./parts/LargeTitle.tsx";

const CharacterListLayout = styled.ul`
  column-count: 5;
  column-gap: 10px;
  max-width: 60%;

  @media (max-width: 1200px) {
    column-count: 4;
  }

  @media (max-width: 900px) {
    column-count: 3;
  }

  @media (max-width: 600px) {
    column-count: 2;
  }

  @media (max-width: 400px) {
    column-count: 1;
  }
`;

function CharacterList() {
  const {data: disneyCharacterList} = useSuspenseQuery({
    queryKey: ['disney', 'characters'],
    queryFn: fetchDisneyCharacters,
  });

  return (
      <>
        <LargeTitle>Disney Characters</LargeTitle>
        <CharacterListLayout>
          {disneyCharacterList.map((character) => (
              <Link key={character['id']} to={`/character/${character['id']}`}>
                <CharacterCard key={character['id']} character={character}/>
              </Link>
          ))}
        </CharacterListLayout>
      </>
  );
}

export default CharacterList;