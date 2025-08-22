import { NavLink, Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/" || location.pathname === "/home";

  return (
    <header className="header">
      <div className="container header__inner">
        {/* logo */}
        <Link to="/" className="header__brand" aria-label="Aller à l’accueil">
          <img src={logo} alt="Kasa" className="header__logo" />
        </Link>

        {/* navigation */}
        <nav className="header__nav" aria-label="Navigation principale">
          <NavLink
            to="/home"
            className={() =>
              "header__link" + (isHome ? " is-active" : "")
            }
          >
            Accueil
          </NavLink>

          <NavLink
            to="/a-propos"
            className={({ isActive }) =>
              "header__link" + (isActive ? " is-active" : "")
            }
          >
            À propos
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
