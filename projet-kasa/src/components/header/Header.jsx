import { NavLink, Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import styles from "./header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`${styles.header__inner} ${styles.container}`}>
        {/* logo */}
        <Link to="/" className={styles.header__brand} aria-label="Aller à l’accueil">
          <img src={logo} alt="Kasa" className={styles.header__logo} />
        </Link>

        {/* navigation */}
        <nav className={styles.header__nav} aria-label="Navigation principale">
          <NavLink
            to="/home"
            end
            className={({ isActive }) =>
              `${styles.header__link} ${isActive ? styles.is_active : ""}`
            }
          >
            Accueil
          </NavLink>

          <NavLink
            to="/a-propos"
            className={({ isActive }) =>
              `${styles.header__link} ${isActive ? styles.is_active : ""}`
            }
          >
            À propos
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
