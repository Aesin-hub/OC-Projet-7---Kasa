import { Link } from "react-router-dom";
import styles from "../card/card.module.scss";

export default function Card({ id, title, cover }) {
  return (
    <article className={styles.card}>
      <Link to={`/logement/${id}`} className={styles.card__link}>
        <div className={styles.card__media}>
          {/* Image du logement */}
          {/* Si cover est vide, on utilise une image par défaut "/vite.svg" */}
          <img src={cover || "/vite.svg"} alt={title} />
          <div className={styles.card__gradient} />
          <h3 className={styles.card__title}>{title}</h3>
        </div>
      </Link>
    </article>
  );
}
