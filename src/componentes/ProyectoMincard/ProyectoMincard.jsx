import React, { useEffect, useState } from 'react';
import './ProyectoMincard.css';

const ProyectoMincard = ({ imagenProy, dominioProy, docenteProy, cicloProy }) => {
    return (
        <div className='mincardProy'>
            <div className='mincardImg'>
                <img src='/src/assets/proyecto.webp'></img>
            </div>
            <div className='mincardInfo'>
                <h4>{dominioProy}</h4>
                <div className='mincardDatos'>
                    <p><strong>ALUMNOS</strong></p>
                    <p>a</p>
                    <p><strong>Tutor.</strong></p>
                    <p>{docenteProy}</p>
                    <p><strong>Ciclos.</strong></p>
                    <p>{cicloProy}</p>
                </div>
            </div>
        </div>
    )
}

export default ProyectoMincard;