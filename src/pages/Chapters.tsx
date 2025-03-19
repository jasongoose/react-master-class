import {useParams} from "react-router";
import {getTargetBook} from "../utils";

type Params = {
  authorId: string;
  bookId: string;
}

function Chapters() {
  const {authorId = '', bookId = ''} = useParams<Params>();

  const targetBook = getTargetBook(authorId, bookId);

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