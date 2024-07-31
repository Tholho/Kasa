import React from "react";
import styles from "./TagList.module.scss"

export default function TagList({ tags }) {
    const tagList = tags.map((tag, index) => (
        <li key={index} className={styles.tagElem}>{tag}</li>
    ))
    return <ul className={styles.tags}>{tagList}</ul>
}