import React from "react"
import logements from "/src/assets/JSON/logements.json"
import Card from "./Card";
import styles from "./modules_scss/Gallery.module.scss"

export default function Gallery() {
    //Building Gallery and assigning a unique key for react's own logic
    const gallery = logements.map(logement =>
        <Card key={logement.id} {...logement} />
    )
    return (
        <div className={styles.container}>
            <div className={styles.cardsContainer}>
                {gallery}
            </div>
        </div>
    )
}