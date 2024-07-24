import React from "react"
import logements from "/src/assets/JSON/logements.json"
import Card from "./Card";
import styles from "./Gallery.module.scss"

function Gallery() {
    let test = logements[0].id;
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

export default Gallery