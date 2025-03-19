import {Link} from "react-router";

import {getAuthorList} from "../utils";

function Home() {
  const authorList = getAuthorList();

  return (
      <div className="home-container">
        <h1>Best Seller Authors</h1>
        <ul>
          {authorList.map((author) => (
              <li key={author['id']}>
                <Link to={`/author/${author['id']}`}>{author['name']}</Link>
              </li>
          ))}
        </ul>
      </div>
  )
}

export default Home;