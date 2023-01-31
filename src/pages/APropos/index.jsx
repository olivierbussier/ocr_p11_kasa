import "./style.scss";

import TextCollapse from "../../components/TextCollapse";
import Banner from "../../components/Banner";

const APropos = () => {
  return (
    <div className="apropos">
      <Banner images={"./assets/bg-img-apropos.png"} />

      <div className="blabla">
        <TextCollapse title="Fiabilité">
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes.
        </TextCollapse>

        <TextCollapse title="Respect">
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </TextCollapse>

        <TextCollapse title="Service">
          Nos équipes se tiennent à votre disposition pour vous fournir une
          expérience parfaite. N'hésitez pas à nous contacter si vous avez la
          moindre question.
        </TextCollapse>

        <TextCollapse title={"Sécurité"}>
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
          pour les voyageurs, chaque logement correspond aux critères de
          sécurité établis par nos services. En laissant une note aussi bien à
          l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les
          standards sont bien respectés. Nous organisons également des ateliers
          sur la sécurité domestique pour nos hôtes.
        </TextCollapse>
      </div>
    </div>
  );
};

export default APropos;
