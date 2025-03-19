import {Link, Outlet, useParams} from "react-router";
import {getTargetAuthor} from "../utils";

type Params = {
  authorId: string;
}

function LayoutAuthor() {
  const {authorId = ''} = useParams<Params>();
  const targetAuthor = getTargetAuthor(authorId);

  if (!targetAuthor) {
    return null;
  }

  return (
      <div className="layout-author-container">
        <h1>{targetAuthor['name']}</h1>
        <ul>
          {targetAuthor['books'].map((book) => (
              <li key={book['id']}>
                <Link to={`${book['id']}`}>{book['name']}</Link>
              </li>
          ))}
        </ul>
        <Outlet></Outlet>
      </div>
  );
}

export default LayoutAuthor;