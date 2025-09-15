import styles from "./home.module.scss";
import logements from '../../data/logements.json'
import heroHome from '../../assets/hero.jpg'
import Banner from '../../components/banner/Banner.jsx'
import Card from '../../components/card/Card.jsx'

export default function Home() {

  return (
    <section className={styles.home}>
      <div className="container">
        <Banner
          image={heroHome}
          title="Chez vous, partout et ailleurs"
          opacity={0.6}
          marginTop={27}
        />

        <div className={styles.home__gallery}>
          {logements.map(l => (
            <Card key={l.id} id={l.id} title={l.title} cover={l.cover} />
          ))}
        </div>
      </div>
    </section>
  )
}
