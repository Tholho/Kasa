import React from "react"
import styles from "./Hero.module.scss"

/*
The redundant h1 tag allows easier responsiveness fidelity to target design
*/
export default function Hero({ backgroundImg, phrase, darken }) {
    return (
        <div className={styles.container}>
            <img className={`${styles.img} ${darken ? styles.darken : ''}`} src={backgroundImg} alt="A pretty landscape" />
            <div className={styles.phrase}>
                {phrase &&
                    <>
                        <h1>{phrase[0]}</h1>
                        <h1>{phrase[1]}</h1>
                    </>
                }
            </div>
        </div>
    )
}