import {useParams} from "react-router";
import {mockData} from "../constants/mock-data.ts";

type Params = {
  authorId: string;
  bookId: string;
}

function Characters() {
  const {authorId = '', bookId = ''} = useParams<Params>();
  const targetAuthor = mockData.find(el => el['id'] === authorId);

  if (!targetAuthor) {
    return null;
  }

  const targetBook = targetAuthor['books'].find(book => book['id'] === bookId);

  if (!targetBook) {
    return null;
  }

  return (
      <ul>
        {targetBook['characters'].map((character) => (<li key={character}>{character}</li>))}
      </ul>
  )
}

export default Characters;