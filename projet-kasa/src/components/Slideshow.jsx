import { useState } from "react";
import arrow from "../assets/arrow.svg";

export default function Slideshow({ pictures = [], alt = "" }) {
  const [index, setIndex] = useState(0);
  const count = pictures.length;

  if (!pictures || count === 0) return null;

  const go = (dir) => {
    setIndex((i) => {
      const next = (i + dir + count) % count;
      return next;
    });
  };

  return (
    <div className="slideshow" aria-label="Galerie d'images">
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
