import {Link, Outlet, useParams} from "react-router";

import {mockData} from "../constants/mock-data.ts";

type Params = {
  authorId: string;
}

function LayoutAuthor() {
  const {authorId = ''} = useParams<Params>();
  const targetAuthor = mockData.find(el => el['id'] === authorId);

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