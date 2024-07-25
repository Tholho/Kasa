import React from "react";
import { useState, useEffect } from "react";
import { useLocation, useParams, useRouteError } from "react-router-dom";
import logementsJSON from "/src/assets/JSON/logements.json";
import styles from "./Accomodation.module.scss";
import ErrorPage from "./ErrorPage";
import Dropdown from "./Dropdown";

function Rating({ rating }) {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            // Colored star
            stars.push(
                <svg key={i} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.7212 0.843656C13.4728 0.328088 12.9479 0 12.3714 0C11.7949 0 11.2747 0.328088 11.0216 0.843656L8.00788 7.04452L1.27748 8.03816C0.715055 8.12253 0.246365 8.51623 0.0729491 9.05524C-0.100466 9.59424 0.0401406 10.1895 0.443215 10.5879L5.32697 15.4201L4.17399 22.2491C4.08025 22.8115 4.3146 23.3833 4.7786 23.7161C5.24261 24.0489 5.85659 24.0911 6.36278 23.8239L12.3761 20.6133L18.3894 23.8239C18.8956 24.0911 19.5096 24.0536 19.9736 23.7161C20.4376 23.3786 20.6719 22.8115 20.5782 22.2491L19.4205 15.4201L24.3043 10.5879C24.7073 10.1895 24.8526 9.59424 24.6745 9.05524C24.4964 8.51623 24.0324 8.12253 23.47 8.03816L16.7349 7.04452L13.7212 0.843656Z" fill="#FF6060" />
                </svg>

            );
        } else {
            // Empty star
            stars.push(
                <svg key={i} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.7212 0.843656C13.4728 0.328088 12.9479 0 12.3714 0C11.7949 0 11.2747 0.328088 11.0216 0.843656L8.00788 7.04452L1.27748 8.03816C0.715055 8.12253 0.246365 8.51623 0.0729491 9.05524C-0.100466 9.59424 0.0401406 10.1895 0.443215 10.5879L5.32697 15.4201L4.17399 22.2491C4.08025 22.8115 4.3146 23.3833 4.7786 23.7161C5.24261 24.0489 5.85659 24.0911 6.36278 23.8239L12.3761 20.6133L18.3894 23.8239C18.8956 24.0911 19.5096 24.0536 19.9736 23.7161C20.4376 23.3786 20.6719 22.8115 20.5782 22.2491L19.4205 15.4201L24.3043 10.5879C24.7073 10.1895 24.8526 9.59424 24.6745 9.05524C24.4964 8.51623 24.0324 8.12253 23.47 8.03816L16.7349 7.04452L13.7212 0.843656Z" fill="#E3E3E3" />
                </svg>

            );
        }
    }

    return (
        <div className={styles.rating}>
            {stars}
        </div>
    );
}

function TagList({ tags }) {
    const tagList = tags.map((tag, index) => (
        <li key={index} className={styles.tagElem}>{tag}</li>
    ))
    return <ul className={styles.tags}>{tagList}</ul>
}

function DropdownList({elements}) {
    const elemList = elements.map((element, index) => (
        <li key={index}>{element}</li>
    ))
    return <ul className={styles.dropdownList}>{elemList}</ul>
}

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
            <img className={styles.coverImg} src={data.cover} />
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