import React from "react"
import { Link } from "react-router-dom"
import styles from "./modules_scss/Card.module.scss"

export default function Card({ ...logement }) {
    return (
        <Link
            to={`accomodation/${logement.id}`}
            state={{ logement }}
            className={styles.cardLink}
        >
            <div className={styles.cardContainer}>
                <div className={styles.imgContainer}>
                    <img src={logement.cover} />
                    <div className={styles.brightnessGradient}></div>
                </div>
                <p className={styles.title}>{logement.title}</p>
            </div>
        </Link>
    )
}