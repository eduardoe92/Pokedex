import { useState, useEffect } from "react";

function usePokemones(generacionSeleccionada) {
    const [pokemones, setPokemones] = useState([]);
    const [siguienteUrl, setSiguienteUrl] = useState('');
    const [verMas, setVerMas] = useState(true);

    const URL_BASE = 'https://pokeapi.co/api/v2/pokemon';

    const calcularOffsetYCantidad = (generacion) => {
        switch (generacion) {
            case 1:
                return { offset: 0, cantidad: 151 };
            case 2:
                return { offset: 151, cantidad: 100 };
            case 3:
                return { offset: 251, cantidad: 135 };
            case 4:
                return { offset: 386, cantidad: 107 };
            case 5:
                return { offset: 493, cantidad: 156 };
            case 6:
                return { offset: 649, cantidad: 72 };
            case 7:
                return { offset: 721, cantidad: 88 };
            case 8:
                return { offset: 809, cantidad: 96 };
            case 9:
                return { offset: 905, cantidad: 103 };
            default:
                return { offset: 0, cantidad: Infinity };
        }
    };

    const fetchPokemon = async (url) => {
        try {
            const response = await fetch(url);
            const poke = await response.json();

            const abilities = poke.abilities.map(a => a.ability.name);
            const stats = poke.stats.map(s => { return { name: s.stat.name, base: s.base_stat } });
            const types = poke.types.map(t => t.type.name);

            const imagen = poke.sprites.other.dream_world.front_default || poke.sprites.front_default;

            if (imagen) {
                return {
                    id: poke.id,
                    nombre: poke.name,
                    imagen: imagen,
                    abilities,
                    stats,
                    types
                };
            }
        } catch (error) {
            console.error('Error al obtener información del Pokémon:', error);
        }

        return {};
    }


    const getPokemones = async (url) => {
        const response = await fetch(url);
        const listaPokemones = await response.json();
        const { next, results } = listaPokemones;

        const newPokemones = await Promise.all(
            results.map((pokemon) => fetchPokemon(pokemon.url))
        );

        return { next, newPokemones };
    }

    const obtenerPokemones = async () => {
        const { offset, cantidad } = calcularOffsetYCantidad(generacionSeleccionada);
        const url = `${URL_BASE}?limit=${cantidad}&offset=${offset}`;

        const { next, newPokemones } = await getPokemones(url);
        setPokemones(newPokemones);
        setSiguienteUrl(next);

        if (!next) {
            setVerMas(false);
        }
    }


    const masPokemones = async () => {
        if (siguienteUrl) {
            const { next, newPokemones } = await getPokemones(siguienteUrl);
            setPokemones((prev) => {
                const { offset, cantidad } = calcularOffsetYCantidad(
                    generacionSeleccionada
                );
                const filteredPokemones = newPokemones.filter((pokemon) => {
                    const id = parseInt(pokemon.id);
                    return id >= offset && id <= offset + cantidad;
                });
                if (!next) {
                    setVerMas(false);
                }
                return [...prev, ...filteredPokemones];
            });
            setSiguienteUrl(next);
        } else {
            setVerMas(false);
        }
    };



    const searchPokemon = async (busqueda) => {
        const url = `${URL_BASE}/${busqueda.toLocaleLowerCase()}`;
        return await fetchPokemon(url);
    }

    useEffect(() => { obtenerPokemones() }, [generacionSeleccionada]);

    return { pokemones, masPokemones, verMas, searchPokemon };
}

export default usePokemones;
