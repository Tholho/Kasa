import React from "react"
import logements from "/src/assets/JSON/logements.json"

function Gallery() {
    let test = logements[0].id;
    return (
        <>
        <p>{test}</p>
        </>
    )
}

export default Gallery