import { useState } from "react";
import arrow from "../../assets/arrow.svg";
import styles from "../slideshow/slideshow.module.scss";

export default function Slideshow({ pictures = [], alt = "" }) {
  // État pour suivre l'index de l'image actuelle
  const [index, setIndex] = useState(0);
  const count = pictures.length;

  if (!pictures || count === 0) return null;

  // Fonction pour changer d'image
  // dir : -1 pour précédent, +1 pour suivant
  const go = (dir) => {
    setIndex((i) => {
      // (i + dir + count) % count → boucle de manière circulaire
      const next = (i + dir + count) % count;
      return next;
    });
  };

  return (
    <div className={styles.slideshow} aria-label="Galerie d'images">
      {/* bouton précédent, si plusieurs images */}
      {count > 1 && (
        <button
          className={`${styles.slideshow__ctrl} ${styles.slideshow__ctrl_prev}`}
          onClick={() => go(-1)}
          aria-label="Image précédente"
        >
          <img src={arrow} alt="" />
        </button>
      )}

      

      <img
        className={styles.slideshow__img}
        src={pictures[index]}
        alt={alt || `Photo ${index + 1}`}
      />

      {/* bouton suivant, si plusieurs images */}
      {count > 1 && (
        <>
          <button
            className={`${styles.slideshow__ctrl} ${styles.slideshow__ctrl_next}`}
            onClick={() => go(+1)}
            aria-label="Image suivante"
          >
            <img src={arrow} alt="" />
          </button>

          <div className={styles.slideshow__count} aria-live="polite">
            {index + 1}/{count}
          </div>
        </>
      )}
    </div>
  );
}
