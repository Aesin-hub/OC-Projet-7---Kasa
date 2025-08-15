import { useMemo } from "react";
import { useParams, Navigate } from "react-router-dom";
import data from "../data/logements.json";
import Slideshow from "../components/Slideshow";
import Collapse from "../components/Collapse"; // tu l'as déjà
import Rating from "../components/Rating";

export default function Logement() {
  const { id } = useParams();

  const logement = useMemo(
    () => data.find((l) => l.id === id),
    [id]
  );

  if (!logement) {
    return <Navigate to="*" replace />; // redirige vers ta 404
  }

  const {
    title,
    location,
    tags = [],
    host = {},
    rating = 0,
    pictures = [],
    description = "",
    equipments = [],
  } = logement;

  return (
    <section className="logement container">
      {/* Galerie */}
      <Slideshow pictures={pictures} alt={title} />

      {/* En-tête : titre + host */}
      <div className="logement__header">
        <div className="logement__intro">
          <h1 className="logement__title">{title}</h1>
          <p className="logement__location">{location}</p>

          <ul className="logement__tags" role="list">
            {tags.map((t) => (
              <li key={t} className="tag">{t}</li>
            ))}
          </ul>
        </div>

        <div className="logement__aside">
          <div className="host">
            <span className="host__name">{host.name}</span>
            {host.picture && (
              <img className="host__avatar" src={host.picture} alt={host.name} />
            )}
          </div>
          <Rating value={rating} />
        </div>
      </div>

      {/* Panneaux */}
      <div className="logement__cols">
        <Collapse title="Description" width="582px">
          <p>{description}</p>
        </Collapse>

        <Collapse title="Équipements" width="582px">
          <ul className="equip-list">
            {equipments.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </section>
  );
}
