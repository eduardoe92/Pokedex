import React, { useState, useEffect } from 'react';
import './Pokemones.css';
import usePokemones from '../hooks/usePokemones';
import InfiniteScroll from 'react-infinite-scroll-component';
import Cargando from './Cargando';
import DetallePokemon from './DetallePokemon';
import BuscadorComponent from './BuscadorComponent';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';

function Pokemon({ id, nombre, imagen, verPokemon }) {
    if (!id || !nombre || !imagen) {
        return null;
    }

    return (
        <div className="pokemon-card" onClick={verPokemon}>
            <p className="pokemon-titulo">
                <span>{nombre}</span>
            </p>
            <img className="pokemon-imagen" src={imagen} alt={nombre} />
            <p className="pokemon-titulo">
                <span>Id: #{id}</span>
            </p>
        </div>
    );
}

function Pokemones() {
    const location = useLocation();
    const pathname = location.pathname;

    const [generacionActual, setGeneracionActual] = useState(null);

    useEffect(() => {
        if (pathname.startsWith('/generation/')) {
            const generacionStr = pathname.replace('/generation/', '');
            setGeneracionActual(parseInt(generacionStr));
        } else {
            setGeneracionActual(null);
        }
    }, [pathname]);

    const { pokemones, masPokemones, verMas, searchPokemon } = usePokemones(generacionActual);

    const [mostrar, setMostrar] = useState({ mostrar: false, pokemon: {} });

    const [busqueda, setBusqueda] = useState('');

    const verPokemon = (pokemon) => setMostrar({ mostrar: true, pokemon });

    const noVerPokemon = () => {
        setMostrar({ mostrar: false, pokemon: {} });
        setBusqueda('');
    };

    const buscarPokemon = async (e) => {
        e.preventDefault();

        if (!busqueda) return;

        const pokemon = await searchPokemon(busqueda);
        console.log(pokemon);
        setMostrar({ mostrar: true, pokemon });
    };

    return (
        <>
            <Navbar />
            <DetallePokemon {...mostrar} cerrar={noVerPokemon} />
            <BuscadorComponent
                busqueda={busqueda}
                setBusqueda={setBusqueda}
                buscarPokemon={buscarPokemon}
            />
            <InfiniteScroll
                dataLength={pokemones.length}
                next={masPokemones}
                hasMore={verMas}
                loader={<Cargando />}
                endMessage={
                    <h3 className='titulo' style={{ gridColumn: '1/6' }}>
                        Lo siento, no hay más pokemones por mostrar!!
                    </h3>
                }
                className='pokemon-container'
            >
                {pokemones.map((pokemon) =>
                    pokemon && (
                        <Pokemon {...pokemon} key={pokemon.id} verPokemon={() => verPokemon(pokemon)} />
                    )
                )}
            </InfiniteScroll>
            <Footer />
        </>
    );
}

export default Pokemones;
