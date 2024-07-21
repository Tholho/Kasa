import React, { useState } from "react"
import { Outlet } from "react-router-dom";
import styles from "./AboutDropdown.module.scss"

export default function AboutDropdown({ textContent }) {

    return (
            <p>
                {textContent}
            </p>
        
    )
}