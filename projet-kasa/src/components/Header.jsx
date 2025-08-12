import { NavLink, Link } from 'react-router-dom'
import logo from '../assets/logo.svg'

export default function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <Link to="/" className="header__brand" aria-label="Aller à l’accueil">
          <img src={logo} alt="Kasa" className="header__logo" />
        </Link>

        <nav className="header__nav" aria-label="Navigation principale">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              'header__link' + (isActive ? ' is-active' : '')
            }
          >
            Accueil
          </NavLink>

          <NavLink
            to="/a-propos"
            className={({ isActive }) =>
              'header__link' + (isActive ? ' is-active' : '')
            }
          >
            À propos
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
