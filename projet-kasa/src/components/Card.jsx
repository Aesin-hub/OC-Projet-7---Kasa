import { Link } from "react-router-dom";

// Composant Card
// Props :
// - id     → identifiant du logement (sert à créer le lien vers la page de détail)
// - title  → titre du logement
// - cover  → image de couverture

export default function Card({ id, title, cover }) {
  return (
    <article className="card">
      {/* Lien interne vers la page de détail du logement */}
      {/* L'URL inclut l'id : ex /logement/abc123 */}
      <Link to={`/logement/${id}`} className="card__link">
        <div className="card__media">
          {/* Image du logement */}
          {/* Si cover est vide, on utilise une image par défaut "/vite.svg" */}
          <img src={cover || "/vite.svg"} alt={title} />
          <div className="card__gradient" />
          <h3 className="card__title">{title}</h3>
        </div>
      </Link>
    </article>
  );
}
