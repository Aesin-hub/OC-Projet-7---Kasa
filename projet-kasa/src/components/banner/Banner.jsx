import styles from "../banner/banner.module.scss";

export default function Banner({ image, title, opacity = 0.6 }) {
  return (
    <div
      className={styles.banner}
      style={{
        "--hero": `url(${image})`,
        "--overlay-opacity": opacity,
      }}
    >
      {title && (
        <div className={styles.banner_title}>
          <span>{title}</span>
        </div>
      )}
    </div>
  );
}
