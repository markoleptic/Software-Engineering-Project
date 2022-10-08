// icons and images
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links-left">
        <li className="nav-item-left">
          <Link className="text-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item-left">
          <Link className="text-link" to="/recs">
            Recommendations
          </Link>
        </li>
      </ul>
      <div className="nav-right">
        <ul className="nav-links-right">
          <li className="nav-item-right">
            <Link className="text-link" to="/login">
              Login
            </Link>
          </li>
          <li className="nav-item-right">
            <Link className="text-link" to="/register">
              Register
            </Link>
          </li>
          <li className="nav-item-right">
            <Link className="text-link" to="/profile">
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
