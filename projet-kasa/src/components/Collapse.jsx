import { useId, useState } from "react";
import arrow from"../assets/arrow.svg";

/**
 * Collapse – menu déroulant accessible
 * - Fermé par défaut (defaultOpen=false)
 * - Animation CSS (max-height + opacity)
 * - Icône chevron qui pivote
 */
export default function Collapse({ title, children, defaultOpen = false, width }) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();

  return (
    <section className={`collapse ${open ? "is-open" : ""}`}
    style={width ? { width } : undefined}>
      <h3 className="collapse__header">
        <button
          id={`btn-${id}`}
          className="collapse__btn"
          aria-expanded={open}
          aria-controls={`panel-${id}`}
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

      <div
        id={`panel-${id}`}
        role="region"
        aria-labelledby={`btn-${id}`}
        className="collapse__panel"
      >
        <div className="collapse__content">{children}</div>
      </div>
    </section>
  );
}
