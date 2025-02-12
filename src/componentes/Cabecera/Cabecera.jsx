import React from 'react';
import './Cabecera.css';
import { Link } from 'react-router-dom';

const Cabecera = () => {

    return (
        <nav className="cabecera">
            <Link to="/"><img className="logoMP" src="/src/assets/mp-logoNaranja100.png"></img></Link>
            <h1>Marca Personal FP</h1>
            <img className="imagenIdioma" src="/src/assets/flag-for-flag-spain-svgrepo-com.svg"></img>
            <img className="imagenIdioma" src="/src/assets/united-kingdom-uk-svgrepo-com.svg"></img>
        </nav>
    )

}
export default Cabecera;