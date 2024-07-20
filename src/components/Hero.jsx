import React from "react"
import styles from "./Hero.module.scss"

function Phrase({phrase}) {
    if (!phrase) {
        return null
    }
    else {
        return (
            <>
            <h1>{phrase[0]}</h1>
            <h1>{phrase[1]}</h1>
            </>
        )
    }
}

export default function Hero({backgroundImg, phrase, darken}) {
    return (
        <div className={styles.container}>
            <img className={`${styles.img} ${darken ? styles.darken : ''}`} src={backgroundImg}/>
            <div className={styles.phrase}>
            <Phrase phrase={phrase}/>
            </div>
        </div>
    )
}