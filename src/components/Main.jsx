import "./Main.css";
import Pokedex from './Pokedex';
import { LogoMain, PokedexLogo } from "./icons";
import { Link } from "react-router-dom";


function Main() {

    return (
        <>
            <div className='App-background'>
                <Link to="/pokedex">
                    <LogoMain alt="PokemonLogo" onClick={Pokedex} />
                </Link>
                <Link to="/pokedex">
                    <PokedexLogo alt="Pokedex" onClick={Pokedex} />
                </Link>
            </div>
        </>
    );
}

export default Main;