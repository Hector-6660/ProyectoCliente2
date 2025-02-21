import React from 'react';
import './Cabecera.css';
import { Link } from 'react-router-dom';
import SelectorIdioma from '../SelectorIdioma/SelectorIdioma';

const Cabecera = ({ manejarSeleccion, idioma }) => {
    return (
        <nav className="cabecera">
            <Link to="/"><img className="logoMP" src="/src/assets/mp-logoNaranja100.png"></img></Link>
            <h1>Marca Personal FP</h1>
            <SelectorIdioma manejarSeleccion={manejarSeleccion} idioma={idioma}></SelectorIdioma>
        </nav>
    )
}

export default Cabecera;