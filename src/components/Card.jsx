import React from "react"
import { Link } from "react-router-dom"
import styles from "./Card.module.scss"

export default function Card({...logement}) {
    return (
        <Link 
        to={`accomodation/${logement.id}`}
        state={{logement}}
        >
        <div className={styles.cardContainer}>
            <div className={styles.imgContainer}>
        <img src={logement.cover}/>
        <div className={styles.brightnessGradient}></div>
        </div>
        <p className={styles.title}>{logement.title}</p>
        </div>
        </Link>
    )
}