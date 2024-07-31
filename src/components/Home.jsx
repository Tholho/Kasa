import React from "react"
import Hero from "./Hero"
import Gallery from "./Gallery"

export default function Home() {
    return (
        <>
            <Hero
                backgroundImg={"./src/assets/img/HeroHome.jpg"}
                phrase={["Chez vous,", "partout et ailleurs"]}
                darken={true}
            />
            <Gallery />
        </>
    )
}