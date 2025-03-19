import {Link, Outlet, useParams} from "react-router";
import {getTargetBook} from "../utils";

type Params = {
  authorId: string;
  bookId: string;
}

function LayoutAuthorBook() {
  const {authorId = '', bookId = ''} = useParams<Params>();

  const targetBook = getTargetBook(authorId, bookId);

  if (!targetBook) {
    return null;
  }

  return (
      <div className="layout-author-book-container">
        <h2>{targetBook['name']}</h2>
        <ul>
          <li>
            <Link to="chapters">
              Chapters
            </Link>
          </li>
          <li>
            <Link to="characters">
              Characters
            </Link>
          </li>
        </ul>
        <hr/>
        <Outlet></Outlet>
      </div>
  );
}

export default LayoutAuthorBook;