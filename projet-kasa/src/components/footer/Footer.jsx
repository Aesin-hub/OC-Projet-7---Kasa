import logoBlanc from '../../assets/logo_blanc.svg';
import styles from "../footer/footer.module.scss";

export default function Footer({ marginTop = 0 }) {
  return (
    <footer
      className={styles.footer}
      style={{
        "--footer-margin-top": `${marginTop}px`
      }}
    >
      <div className={styles.footer__inner}>
        <img
          src={logoBlanc}
          alt="Kasa"
          className={styles.footer__logo}
          width="122"
          height="39"
        />
        <p className={styles.footer__text}>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  )
}
