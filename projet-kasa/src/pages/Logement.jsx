// src/pages/Logement.jsx
import { useParams } from "react-router-dom";
export default function Logement() {
  const { id } = useParams();
  return <h1>Fiche logement — id : {id}</h1>;
}
