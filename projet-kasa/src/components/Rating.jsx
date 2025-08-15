export default function Rating({ value = 0 }) {
  const v = Math.max(0, Math.min(5, Number(value) || 0));
  return (
    <div className="rating" aria-label={`Note ${v} sur 5`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={"rating__star" + (i < v ? " is-on" : "")} />
      ))}
    </div>
  );
}
