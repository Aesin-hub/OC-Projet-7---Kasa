import { useMemo } from "react";
import { useParams, Navigate } from "react-router-dom";
import data from "../../data/logements.json";
import Slideshow from "../../components/slideshow/Slideshow";
import Collapse from "../../components/collapse/Collapse";
import Rating from "../../components/rating/Rating";
import styles from "../Logement/logement.module.scss";

export default function Logement() {
  const { id } = useParams();

  const logement = useMemo(
    () => data.find((l) => l.id === id),
    [id]
  );

  if (!logement) {
    return <Navigate to="*" replace />;
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
    <section className={`{styles.logement} container`}>
      {/* Galerie */}
      <Slideshow pictures={pictures} alt={title} />

      {/* En-tête */}
      <div className={styles.logement__header}>
        <div className={styles.logement__intro}>
          <h1 className={styles.logement__title}>{title}</h1>
          <p className={styles.logement__location}>{location}</p>

          <ul className={styles.logement__tags} role="list">
            {tags.map((t) => (
              <li key={t} className={styles.tag}>{t}</li>
            ))}
          </ul>
        </div>

        <div className={styles.logement__aside}>
          <div className={styles.host}>
            <span className={styles.host__name}>{host.name}</span>
            {host.picture && (
              <img className={styles.host__avatar} src={host.picture} alt={host.name} />
            )}
          </div>
          <Rating value={rating} />
        </div>
      </div>

      {/* Panneaux */}
      <div className={styles.logement__cols}>
        <Collapse title="Description" width="582px" marginTop="20px">
          <p>{description}</p>
        </Collapse>

        <Collapse title="Équipements" width="582px" marginTop="20px">
          <ul className={styles.equip_list}>
            {equipments.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </section>
  );
}
