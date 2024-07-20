import React from "react"
import AboutDropdown from "./AboutDropdown"
import styles from "./About.module.scss"

function About() {
    return (
        <div className={styles.container}>
            <AboutDropdown 
            title={"Fiabilité"}
            textContent={"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."}
            />
            <AboutDropdown 
            title={"Respect"}
            textContent={"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."}
            />
            <AboutDropdown 
            title={"Service"}
            textContent={"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."}
            />
            <AboutDropdown 
            title={"Sécurité"}
            textContent={"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que  pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."}
            />
        </div>
    )
}

export default About