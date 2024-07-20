import React from "react"
import Hero from "./Hero"
import Gallery from "./Gallery"
import logements from "/src/assets/JSON/logements.json"
import styles from "./Home.module.scss"


function makeGallery() {

}

function Home() {
    const backgroundImg = {};
    backgroundImg.source = "../assets/img/HeroHome.jpg"
    return (
        <>
        <body>
        <Hero
        backgroundImg={"./src/assets/img/HeroHome.jpg"}
        phrase={["Chez vous,", "partout et ailleurs"]}
        />
        <Gallery
        />
        </body>
        </>
    )
}

export default Home