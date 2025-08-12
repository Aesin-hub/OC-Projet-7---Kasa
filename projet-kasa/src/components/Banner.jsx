import hero from "../assets/hero.jpg";

export default function Banner() {
  return (
    <div className="home__banner" style={{ "--hero": `url(${hero})` }}>
      <span>Chez vous, partout et ailleurs</span>
    </div>
  );
}
