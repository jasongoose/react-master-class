export type DisneyCharacter = {
  "id": number;
  "name": string;
  "imageUrl": string;
}

export type CharacterDetail = {
  "id": number;
  "films": string[];
  "name": string;
  "imageUrl": string;
  "sourceUrl": string;
}

export const fetchDisneyCharacters = async (): Promise<DisneyCharacter[]> => {
  return fetch('https://disney_api.nomadcoders.workers.dev/characters').then(res => res.json());
}

export const fetchCharacterDetails = async (id: number | string): Promise<CharacterDetail> => {
  return fetch(`https://disney_api.nomadcoders.workers.dev/characters/${id}`).then(res => res.json());
}