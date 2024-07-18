import React from "react"
import Hero from "./Hero"
import Gallery from "./Gallery";

function Home() {
    const backgroundImg = {};
    backgroundImg.source = "../assets/img/HeroHome.jpg"
    return (
        <>
        <body>
        <Hero
        backgroundImg={"./src/assets/img/HeroHome.jpg"}
        phrase={"Chez vous, partout et ailleurs"}
        />
        <Gallery
        />
        </body>
        </>
    )
}

export default Home