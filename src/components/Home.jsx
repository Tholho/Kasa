import React from "react"
import Hero from "./Hero"
import Gallery from "./Gallery"
import image from "/src/assets/img/HeroHome.jpg"

export default function Home() {
    return (
        <>
            <Hero
                backgroundImg={image}
                phrase={["Chez vous,", "partout et ailleurs"]}
                darken={true}
            />
            <Gallery />
        </>
    )
}