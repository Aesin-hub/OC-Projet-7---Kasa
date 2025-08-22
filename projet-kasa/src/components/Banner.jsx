import "../styles/components/_banner.scss";

// Composant Banner
// Props :
// - image      → URL ou import d'une image (fond de la bannière)
// - title      → texte affiché par-dessus la bannière (optionnel)
// - opacity    → opacité du voile superposé à l'image (par défaut 0.6)
// - marginTop  → espace au-dessus de la bannière (par défaut 0px)

export default function Banner({ image, title, opacity = 0.6 }) {
  return (
    <div
      className="banner"
      style={{
        "--hero": `url(${image})`,
        "--overlay-opacity": opacity,
      }}
    >
      {title && (
        <div className="banner__title">
          <span>{title}</span>
        </div>
      )}
    </div>
  );
}
