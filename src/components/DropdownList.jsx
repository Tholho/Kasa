import React from "react"
import styles from "./modules_scss/DropdownList.module.scss"

export default function DropdownList({ elements }) {
    const elemList = elements.map((element, index) => (
        <li key={index}>{element}</li>
    ))
    return (
        <ul className={styles.dropdownList}>{elemList}</ul>
    )
}