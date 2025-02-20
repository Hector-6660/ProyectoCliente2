import React, { useState } from 'react';
import './Cabecera.css';
import { Link } from 'react-router-dom';
import SelectorIdioma from '../SelectorIdioma/SelectorIdioma';
import IdiomaContext from '../../contextos/IdiomaContext';

const Cabecera = () => {
    

    return (
        <nav className="cabecera">
            <Link to="/"><img className="logoMP" src="/src/assets/mp-logoNaranja100.png"></img></Link>
            <h1>Marca Personal FP</h1>
            
        </nav>
    )
}

export default Cabecera;