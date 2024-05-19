import { Link } from "react-router-dom";

import "./Navbar.css";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <nav className="navBar">
      <Link to="/" className="homeLink">
        <h1>TaskApp</h1>
      </Link>
      <ul className="navItems">
        {isAuthenticated ? (
          <>
            <li className="welcomeUser">
              <Link to='/tasks'>{user.username}</Link>
            </li>
            <li>
              <Link
                to="/"
                onClick={() => {
                  logout();
                }}
                className="navItem"
              >
                Cerrar sesión
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login" className="navItem">
                Iniciar sesión
              </Link>
            </li>
            <li>
              <Link to="/register" className="navItem">
                Registrarse
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
