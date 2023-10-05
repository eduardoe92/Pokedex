import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

import {
    Generation1, Generation2, Generation3, Generation4,
    Generation5, Generation6, Generation7, Generation8,
    Generation9, AllGenerations
} from "./Generations";

const generationsData = [
    { title: '1st Generation', component: <Generation1 /> },
    { title: '2nd Generation', component: <Generation2 /> },
    { title: '3rd Generation', component: <Generation3 /> },
    { title: '4th Generation', component: <Generation4 /> },
    { title: '5th Generation', component: <Generation5 /> },
    { title: '6th Generation', component: <Generation6 /> },
    { title: '7th Generation', component: <Generation7 /> },
    { title: '8th Generation', component: <Generation8 /> },
    { title: '9th Generation', component: <Generation9 /> },
    { title: 'All Generations', component: <AllGenerations /> },
];

function Menu() {
    return (
        <>
            <div className="carousel-container">
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        {generationsData.map((_, index) => (
                            <button
                                key={index}
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide-to={index}
                                className={index === 0 ? 'active' : ''}
                                aria-label={`Slide ${index + 1}`}
                            ></button>
                        ))}
                    </div>
                    <div className="carousel-inner">
                        {generationsData.map((generation, index) => (
                            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                <h2 className="carousel-title h3">{generation.title}</h2>
                                <Link to={index === 9 ? '/allpokemon' : `/generation/${index + 1}`}>
                                    <div className="image-container">
                                        {generation.component}
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                    <button className="carousel-control-prev custom-carousel-button" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next custom-carousel-button" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            <div className="card text-center">
                <div className="card-body">
                    <div className="card-header">
                        <h5>¿Qué son los Pokemones?</h5>
                    </div>
                    <p className="card-text">En el mundo de Pokémon, los Pokémon son criaturas ficticias que los entrenadores
                        capturan y entrenan para luchar en batallas contra otros entrenadores. Cada Pokémon tiene sus propias
                        habilidades y características únicas. El objetivo principal de la mayoría de los juegos de Pokémon es
                        convertirse en el campeón de la Liga Pokémon, lo que generalmente implica desafiar a los líderes de
                        gimnasio y enfrentarse al Alto Mando.
                        Los Pokémon se dividen en varias especies, y hasta la fecha, hay cientos de Pokémon diferentes,
                        cada uno con su propio tipo (como agua, fuego, planta, eléctrico, etc.) y habilidades especiales.
                        Algunos Pokémon son muy conocidos, como Pikachu, Charizard y Bulbasaur, mientras que otros son más
                        raros y se pueden encontrar en juegos más recientes.</p>
                </div>
            </div>
        </>
    );
}

export default Menu;

