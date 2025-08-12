import logoBlanc from "../assets/logo_blanc.svg";

export default function Footer() {
  return (
    <footer className="footer">
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
  );
}
