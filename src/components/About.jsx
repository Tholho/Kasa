import React from "react"
import Hero from "./Hero"
import Dropdown from "./Dropdown"
import AboutDropdown from "./AboutDropdown"
import styles from "./About.module.scss"

function About() {
    return (
        <div className={styles.container}>
            <Hero
                backgroundImg={"./src/assets/img/HeroAbout.jpg"}
                //phrase={["Chez vous,", "partout et ailleurs"]}
            />
            <Dropdown title={"Fiabilité"}>
                <AboutDropdown textContent={"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."}/>
            </Dropdown>
            <Dropdown title={"Respect"}>
                <AboutDropdown textContent={"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."}/>
            </Dropdown>
            <Dropdown title={"Service"}>
                <AboutDropdown textContent={"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."}/>
            </Dropdown>
            <Dropdown title={"Sécurité"}>
                <AboutDropdown textContent={"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que  pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."}/>
            </Dropdown>
        </div>
    )
}

export default About