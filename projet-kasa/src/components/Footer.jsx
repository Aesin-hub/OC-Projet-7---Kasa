import logoBlanc from '../assets/logo_blanc.svg'

export default function Footer({ marginTop = 0 }) { // Props pour ajuster la marge supérieure du footer
  return (
    <footer
      className="footer"
      style={{
        "--footer-margin-top": `${marginTop}px`
      }}
    >
      <div className="footer__inner">
        <img
          src={logoBlanc}
          alt="Kasa"
          className="footer__logo"
          width="122"
          height="39"
        />
        <p className="footer__text">© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  )
}
