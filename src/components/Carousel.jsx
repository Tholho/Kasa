import React from "react";
import { useState } from "react";
import styles from "./Carousel.module.scss";

export default function Carousel({ pictures }) {
    const [index, setIndex] = useState(0);

    let hasPrev = index > 0;
    let hasNext = index < pictures.length - 1;

    function handlePrevEvent() {
        if (hasPrev) {
            setIndex(index - 1)
        }
        else {
            setIndex(pictures.length - 1)
        }
    }

    function handleNextEvent() {
        if (hasNext) {
            setIndex(index + 1)
        }
        else {
            setIndex(0)
        }
    }

    let photo = pictures[index];
    return (
        <div className={styles.container}>
            <img className={styles.photo} src={photo} />
            <nav className={styles.carouselNav}>
            <svg onClick={handlePrevEvent} width="48" height="80" viewBox="0 0 48 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M47.0399 7.42497L39.9199 0.344971L0.359863 39.945L39.9599 79.545L47.0399 72.465L14.5199 39.945L47.0399 7.42497Z" fill="white" />
            </svg>
            <svg onClick={handleNextEvent} width="48" height="81" viewBox="0 0 48 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.959961 72.9877L8.03996 80.0677L47.64 40.4677L8.03996 0.867676L0.959961 7.94768L33.48 40.4677L0.959961 72.9877Z" fill="white" />
            </svg>
            </nav>
        </div>
    )
}