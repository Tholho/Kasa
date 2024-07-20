import React from "react"
import styles from "./Card.module.scss"

export default function Card({cover, title}) {
    return (
        <div className={styles.cardContainer}>
        <img src={cover}/>
        <p className={styles.title}>{title}</p>
        </div>
    )
}