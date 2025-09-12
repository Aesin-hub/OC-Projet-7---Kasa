import styles from "../About/about.module.scss";
import Collapse from "../../components/collapse/Collapse";
import Banner from "../../components/banner/Banner";
import heroAbout from "../../assets/hero-about.jpg";

const texts = {
  fiabilite:
    "Les annonces postées sur Kasa garantissent une fiabilité totale. " +
    "Les photos sont conformes aux logements, et toutes les informations " +
    "sont régulièrement vérifiées par nos équipes.",
  respect:
    "La bienveillance fait partie des valeurs fondatrices de Kasa. " +
    "Tout comportement discriminatoire ou de perturbation du voisinage " +
    "entraînera une exclusion de notre plateforme.",
  service:
    "Nos équipes se tiennent à votre disposition pour vous fournir " +
    "une expérience parfaite. N'hésitez pas à nous contacter si " +
    "vous avez la moindre question.",
  securite:
    "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes " +
    "que pour les voyageurs, chaque logement correspond aux critères " +
    "de sécurité établis. En laissant une note aussi bien à l'hôte " +
    "qu'au locataire, cela permet à nos équipes de vérifier que " +
    "les standards sont bien respectés. Nous organisons également " +
    "des ateliers sur la sécurité domestique pour nos hôtes."
};

export default function About() {
  return (
    <main className={styles.about}>
      <Banner 
        image={heroAbout} opacity={0.3} marginTop={38} hideTitle/>

      <div className={`${styles.about__list} container`}>
        <Collapse title="Fiabilité" width="1023px">{texts.fiabilite}</Collapse>
        <Collapse title="Respect" width="1023px">{texts.respect}</Collapse>
        <Collapse title="Service" width="1023px">{texts.service}</Collapse>
        <Collapse title="Sécurité" width="1023px">{texts.securite}</Collapse>
      </div>
    </main>
  );
}
