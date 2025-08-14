// src/pages/ErrorPage.jsx
import { Link } from "react-router-dom";
import img404 from "../assets/404.svg"; // ou .png selon ton fichier

export default function ErrorPage() {
  return (
    <main className="error" aria-labelledby="err-title">
      {/* Image 404 (597 × 263) */}
      <img
        src={img404}
        width={597}
        height={263}
        alt=""                // décoratif, pas lu par les lecteurs d'écran
        className="error__img"
      />

      {/* Titre/texte “Oups ! …” */}
      <h1 id="err-title" className="error__text">
        Oups ! La page que vous demandez n’existe pas.
      </h1>

      {/* Lien de retour */}
      <Link to="/" className="error__back">
        Retourner sur la page d’accueil
      </Link>
    </main>
  );
}
