import { useId, useState } from "react";
// - useId    → génère un identifiant unique pour lier les boutons aux panneaux
// - useState → gère l'état "ouvert/fermé" du panneau

import arrow from"../assets/arrow.svg";

/**
 * Composant Collapse – panneau déroulant accessible
 *
 * Props :
 * - title        : titre affiché dans l'en-tête
 * - children     : contenu à afficher quand le panneau est ouvert
 * - defaultOpen  : si true, le panneau est ouvert par défaut
 * - width        : largeur en CSS (ex: "1023px")
 *
 * Caractéristiques :
 * - Fermé par défaut (sauf si defaultOpen=true)
 * - Animation gérée par CSS (max-height + opacity)
 * - Icône chevron qui pivote selon l'état
 */
export default function Collapse({ title, children, defaultOpen = false, width }) {

  // État qui détermine si le panneau est ouvert
  const [open, setOpen] = useState(defaultOpen);
  // Identifiant unique pour lier bouton ↔ panneau dans les attributs ARIA
  const id = useId();

  return (
    <section className={`collapse ${open ? "is-open" : ""}`}
    style={width ? { width } : undefined}>
      <h3 className="collapse__header">
      {/* Bouton pour ouvrir/fermer le panneau */}
        <button
          id={`btn-${id}`}                          // ID unique pour le bouton
          className="collapse__btn"
          aria-expanded={open}                      // indique si le panneau est ouvert
          aria-controls={`panel-${id}`}             // Lie le bouton au panneau 
          onClick={() => setOpen((o) => !o)}
        >
          <span className="collapse__title">{title}</span>
          <img
          src={arrow}
          alt=""
          className="collapse__chevron"
          aria-hidden="true"
          />
        </button>
      </h3>

      {/* Panneau déroulant */}
      <div
        id={`panel-${id}`}
        role="region"
        aria-labelledby={`btn-${id}`}
        className="collapse__panel"
      >
        {/* Contenu du panneau */}
        <div className="collapse__content">{children}</div>
      </div>
    </section>
  );
}
