import React from "react";
import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import logementsJSON from "/src/assets/JSON/logements.json";
import styles from "./Accomodation.module.scss";
import ErrorPage from "./ErrorPage";
import Dropdown from "./Dropdown";
import Carousel from "./Carousel";
import Rating from "./Rating";
import TagList from "./TagList";
import DropdownList from "./DropdownList";

export default function Accomodation() {
    const { id } = useParams();
    const location = useLocation();
    const [data, setData] = useState(null);

    useEffect(() => {
        if (!location.state || !location.state.logement) {
            setData(logementsJSON.find(logement => logement.id === id));
        }
        else {
            setData(location.state.logement);
        }
    }, [id, location.state]);

    if (!data) {
        return <ErrorPage />;
    }

    return (
        <div className={styles.container}>
            <Carousel pictures={data.pictures} />
            <div className={styles.elements}>
                <div className={styles.leftElements}>
                    <h1 className={styles.title}>{data.title}</h1>
                    <h2 className={styles.location}>{data.location}</h2>
                    <TagList tags={data.tags} />
                </div>
                <div className={styles.rightElements}>
                    <div className={styles.host}>
                        <p className={styles.hostName}>{data.host.name}</p>
                        <img className={styles.hostPicture} src={data.host.picture} />
                    </div>
                    <Rating rating={data.rating} />
                </div>
            </div>
            <div className={styles.dropdowns}>
                <Dropdown title="Description">
                    <p className={styles.description}>{data.description}</p>
                </Dropdown>
                <Dropdown title="Équipements">
                    <DropdownList elements={data.equipments} />
                </Dropdown>
            </div>
        </div>
    );
}