import "../styles/components/_banner.scss";

export default function Banner({ image, title, opacity = 0.6, marginTop = 0 }) {
  return (
    <div
      className="banner"
      style={{
        "--hero": `url(${image})`,
        "--overlay-opacity": opacity,
        marginTop: `${marginTop}px`,
      }}
    >
      {title && <span>{title}</span>}
    </div>
  );
}
