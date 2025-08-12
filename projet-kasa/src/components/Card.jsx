import { Link } from "react-router-dom";

export default function Card({ id, title, cover }) {
  return (
    <article className="card">
      <Link to={`/logement/${id}`} className="card__link">
        <div className="card__media">
          {/* cover viendra du JSON; placeholder pour l’instant */}
          <img src={cover || "/vite.svg"} alt={title} />
          <div className="card__gradient" />
          <h3 className="card__title">{title}</h3>
        </div>
      </Link>
    </article>
  );
}
