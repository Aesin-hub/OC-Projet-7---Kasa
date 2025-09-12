import styles from "../rating/rating.module.scss";

export default function Rating({ value = 0 }) {

  // On s'assure que la note soit bien un nombre entre 0 et 5
  // Number(value) → convertit en nombre
  // || 0          → valeur par défaut si NaN
  // Math.min / Math.max → borne entre 0 et 5

  const v = Math.max(0, Math.min(5, Number(value) || 0));
  return (
    <div className={styles.rating} aria-label={`Note ${v} sur 5`}>
      {/* On crée 5 étoiles */}
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={`${styles.rating__star} ${i < v ? styles.is_on : ""}`} />
      ))}
    </div>
  );
}
