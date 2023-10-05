import './Buscador.css'
import { Buscar } from './icons';

function BuscadorComponent(props) {
    const { busqueda, setBusqueda, buscarPokemon } = props;

    return (
        <>
            <h3 className='titulo'>Mas de 1200 Pokemones, elige tu favorito...</h3>
            <form className='container-buscar' onSubmit={buscarPokemon}>
                <input
                    type="text"
                    placeholder="Encuentra tu pokemon"
                    className="input-buscar"
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                />
                <button className='btn-buscar' type='submit'>
                    <Buscar />
                    Buscar Pokemon
                </button>
            </form>
        </>
    )
}

export default BuscadorComponent;