import React from 'react';
import pokeball from '../img/Pokeball.png';

import './Cargando.css';

const Cargando = () => (
    <div className="cargando-container">
        <img src={pokeball} className="pokeball pokeball-loading" alt="Pokeball" />
    </div>
);

export default Cargando;

