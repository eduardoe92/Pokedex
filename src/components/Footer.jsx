import React from "react";
import { Link } from "react-router-dom";
import { Logo, Pokeball } from "./icons";
import './Footer.css';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <nav className="footer">
            <Link to="/" className="footer-logo">
                <Logo />
            </Link>
            <div className="text-footer">
                <p>©{year}</p>
            </div>
            <Link to="/" className="footer-pokeball">
                <Pokeball />
            </Link>
        </nav>
    )
}

export default Footer;
