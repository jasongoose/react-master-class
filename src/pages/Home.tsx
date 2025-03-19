import {Link} from "react-router";

import {mockData} from "../constants/mock-data.ts";

function Home() {
  return (
      <div className="home-container">
        <h1>Best Seller Authors</h1>
        <ul>
          {mockData.map((author) => (
              <li key={author['id']}>
                <Link to={`/author/${author['id']}`}>{author['name']}</Link>
              </li>
          ))}
        </ul>
      </div>
  )
}

export default Home;