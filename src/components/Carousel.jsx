import React from "react";
import { useState } from "react";
import styles from "./Carousel.module.scss";
import NavButton from "./NavButton";

export default function Carousel({ pictures }) {
    const [index, setIndex] = useState(0);
    let photo = pictures[index];

    return (
        <div className={styles.container}>
            <img className={styles.photo} src={photo} />
            <NavButton
                pictures={pictures}
                index={index}
                setIndex={setIndex}
            />
        </div>
    )
}