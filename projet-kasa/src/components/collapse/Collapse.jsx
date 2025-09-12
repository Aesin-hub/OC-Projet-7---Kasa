import { useId, useState } from "react";
// - useId    → génère un identifiant unique pour lier les boutons aux panneaux
// - useState → gère l'état "ouvert/fermé" du panneau

import arrow from"../../assets/arrow.svg";
import styles from "../collapse/collapse.module.scss";

export default function Collapse({ title, children, defaultOpen = false, width, marginTop }) {

  // État qui détermine si le panneau est ouvert
  const [open, setOpen] = useState(defaultOpen);
  // Identifiant unique pour lier bouton ↔ panneau dans les attributs ARIA
  const id = useId();

  return (
    <section className={`${styles.collapse} ${open ? styles.is_open : ""}`}
    style={{
        ...(width && { width }),
        ...(marginTop && { marginTop }),
        }}>
      <h3 className={styles.collapse__header}>
      {/* Bouton pour ouvrir/fermer le panneau */}
        <button
          id={`btn-${id}`}                          // ID unique pour le bouton
          className={styles.collapse__btn}
          aria-expanded={open}                      // indique si le panneau est ouvert
          aria-controls={`panel-${id}`}             // Lie le bouton au panneau 
          onClick={() => setOpen((o) => !o)}
        >
          <span className={styles.collapse__title}>{title}</span>
          <img
          src={arrow}
          alt=""
          className={styles.collapse__chevron}
          aria-hidden="true"
          />
        </button>
      </h3>

      {/* Panneau déroulant */}
      <div
        id={`panel-${id}`}
        role="region"
        aria-labelledby={`btn-${id}`}
        className={styles.collapse__panel}
      >
        {/* Contenu du panneau */}
        <div className={styles.collapse__content}>{children}</div>
      </div>
    </section>
  );
}
