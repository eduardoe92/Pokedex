import React from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Main from "./components/Main";
import Pokedex from "./components/Pokedex";
import Menu from "./components/Menu";
import Pokemones from "./components/Pokemones";

function GenerationRoutes() {
    const { generationNumber } = useParams();
    return <Pokemones generationNumber={generationNumber} />;
}

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/pokedex" element={<Pokedex />} />
                <Route path="menu" element={<Menu />} />
                <Route path="/generation/:generationNumber" element={<GenerationRoutes />} />
                <Route path="/allpokemon" element={<Pokemones />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;


