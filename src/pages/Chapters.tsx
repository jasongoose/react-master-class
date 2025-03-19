import {useParams} from "react-router";
import {mockData} from "../constants/mock-data.ts";

type Params = {
  authorId: string;
  bookId: string;
}

function Chapters() {
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
        {targetBook['chapters'].map((chapter) => (<li key={chapter}>{chapter}</li>))}
      </ul>
  )
}

export default Chapters;