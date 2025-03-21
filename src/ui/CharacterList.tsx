import {useSuspenseQuery} from "@tanstack/react-query";
import {fetchDisneyCharacters} from "../utils/api.ts";
import styled from "styled-components";

const CharacterListLayout = styled.ul`
  column-count: 5; /* 최대 5개 컬럼 */
  column-gap: 10px;
  padding: 20px;
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

const CharacterCard = styled.li`
  display: inline-block;
  width: 100%;
  margin-bottom: 10px;
  break-inside: avoid; /* 이미지가 컬럼 사이에서 분리되는 것을 방지 */
`;

const CharacterImage = styled.img.attrs({loading: 'lazy'})`
  width: 100%;
  height: auto;
  display: block;
  border-radius: 10px;
`;

function CharacterList() {
  const {data: disneyCharacterList} = useSuspenseQuery({
    queryKey: ['disney', 'characters'],
    queryFn: fetchDisneyCharacters,
  });

  return (
      <CharacterListLayout>
        {disneyCharacterList.map((character) => (
            <CharacterCard key={character['id']}>
              <CharacterImage src={character['imageUrl']} alt={character['name']}/>
            </CharacterCard>))}
      </CharacterListLayout>
  );
}

export default CharacterList;