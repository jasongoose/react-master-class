import {Link, Outlet} from "react-router";

function LayoutGlobal() {
  return (
      <div className="layout-global-container">
        <ul>
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about">
              About
            </Link>
          </li>
        </ul>
        <Outlet></Outlet>
      </div>
  );
}

export default LayoutGlobal;