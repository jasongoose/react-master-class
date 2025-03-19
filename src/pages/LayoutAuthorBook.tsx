import {Link, Outlet, useParams} from "react-router";
import {mockData} from "../constants/mock-data.ts";

type Params = {
  authorId: string;
  bookId: string;
}

function LayoutAuthorBook() {
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
        <Outlet></Outlet>
      </div>
  );
}

export default LayoutAuthorBook;