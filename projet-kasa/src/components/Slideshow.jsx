import { useState } from "react";
import arrow from "../assets/arrow.svg";

// Composant Slideshow
// Props :
// - pictures → tableau d'URLs d'images à afficher
// - alt      → texte alternatif générique pour les images (optionnel)

export default function Slideshow({ pictures = [], alt = "" }) {
  // État pour suivre l'index de l'image actuelle
  const [index, setIndex] = useState(0);
  // Nombre total d'images
  const count = pictures.length;

  // Si pas d'images, on ne rend rien
  if (!pictures || count === 0) return null;

  // Fonction pour changer d'image
  // dir : -1 pour précédent, +1 pour suivant
  const go = (dir) => {
    setIndex((i) => {
      /// (i + dir + count) % count → boucle de manière circulaire
      // Exemple : à la dernière image, si dir=+1 → revient à 0
      const next = (i + dir + count) % count;
      return next;
    });
  };

  return (
    <div className="slideshow" aria-label="Galerie d'images">
      {/* bouton précédent, si plusieurs images */}
      {count > 1 && (
        <button
          className="slideshow__ctrl slideshow__ctrl--prev"
          onClick={() => go(-1)}
          aria-label="Image précédente"
        >
          <img src={arrow} alt="" />
        </button>
      )}

      

      <img
        className="slideshow__img"
        src={pictures[index]}
        alt={alt || `Photo ${index + 1}`}
      />

      {/* bouton suivant, si plusieurs images */}
      {count > 1 && (
        <>
          <button
            className="slideshow__ctrl slideshow__ctrl--next"
            onClick={() => go(+1)}
            aria-label="Image suivante"
          >
            <img src={arrow} alt="" />
          </button>

          <div className="slideshow__count" aria-live="polite">
            {index + 1}/{count}
          </div>
        </>
      )}
    </div>
  );
}
