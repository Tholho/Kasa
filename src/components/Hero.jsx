import React from "react"
import styles from "./Hero.module.scss"

function Hero({backgroundImg, phrase}) {
    return (
        <div className={styles.container}>
            <img className={styles.img} src={backgroundImg}></img>
            <h1 className={styles.phrase}>{phrase}</h1>
        </div>
    )
}

export default Hero