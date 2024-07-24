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
        <img src={logement.cover}/>
        <p className={styles.title}>{logement.title}</p>
        </div>
        </Link>
    )
}