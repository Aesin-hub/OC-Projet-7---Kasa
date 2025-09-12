// src/pages/ErrorPage.jsx
import { Link } from "react-router-dom"; // Link pour créer un lien vers la page d'accueil
import styles from "../ErrorPage/errorpage.module.scss";
import img404 from "../../assets/404.svg";

export default function ErrorPage() {
  return (
    <main className={styles.error} aria-labelledby="err-title">
      {/* Image 404 */}
      <img
        src={img404}
        width={597}
        height={263}
        alt=""                
        className={styles.error__img}
      />

      {/* Message d'erreur */}
      <h1 id="err-title" className={styles.error__text}>
        Oups ! La page que vous demandez n’existe pas.
      </h1>

      {/* Lien de retour */}
      <Link to="/" className={styles.error__back}>
        Retourner sur la page d’accueil
      </Link>
    </main>
  );
}
