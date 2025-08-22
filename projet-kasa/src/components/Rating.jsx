// Composant Rating
// Props :
// - value → note reçue (par défaut 0)
//
// Fonctionnement :
// - Affiche 5 étoiles
// - Remplit les étoiles jusqu'à la valeur donnée (ex: 3 → 3 étoiles pleines, 2 vides)

export default function Rating({ value = 0 }) {

  // On s'assure que la note soit bien un nombre entre 0 et 5
  // Number(value) → convertit en nombre
  // || 0          → valeur par défaut si NaN
  // Math.min / Math.max → borne entre 0 et 5

  const v = Math.max(0, Math.min(5, Number(value) || 0));
  return (
    <div className="rating" aria-label={`Note ${v} sur 5`}>
      {/* On crée 5 étoiles */}
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={"rating__star" + (i < v ? " is-on" : "")} />
      ))}
    </div>
  );
}
