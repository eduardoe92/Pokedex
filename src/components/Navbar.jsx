import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Logo, Luna, Pokeball, Sol } from "./icons";
import './Navbar.css';

const Navbar = () => {
    const [tema, setTema] = useState(localStorage.getItem('tema') || 'claro');

    const handleChange = (e) => {
        const nuevoTema = e.target.checked ? 'oscuro' : 'claro';
        setTema(nuevoTema);
        localStorage.setItem('tema', nuevoTema);
    }

    useEffect(() => {
        if (!tema) {
            const temaGuardado = localStorage.getItem('tema');
            if (temaGuardado) {
                setTema(temaGuardado);
            }
        }
    }, [tema]);

    useEffect(() => {
        document.body.setAttribute('data-tema', tema);
    }, [tema]);

    return (
        <nav>
            <Link to="/">
                <Logo />
            </Link>
            <Link to="/">
                <Pokeball />
            </Link>
            <div className="switch">
                <Sol />
                <label>
                    <input type="checkbox" className="check-switch" onChange={handleChange} hidden checked={tema === 'oscuro'} />
                    <span className="slider"></span>
                </label>
                <Luna />
            </div>
        </nav>
    )
}

export default Navbar;


