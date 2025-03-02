import React, { useEffect, useState } from 'react';
import './AlumnoMincard.css';

const AlumnoMincard = ({ nombreAlu, apellidoAlu, idiomaAlu, cicloAlu }) => {
    return (
        <div className='mincardAlum'>
        <div className='mincardAlumContenido'>
            <div className='mincardImg'>
                <img src='/src/assets/persona.jpg'></img>
            </div>
            <div className='mincardInfo'>
                <h4>{nombreAlu} {apellidoAlu}</h4>
                <div className='mincardDatos'>
                    <p>{idiomaAlu}</p>
                    <p><strong>Perfiles.</strong> </p>
                    <p><strong>Ciclos.</strong> {cicloAlu}</p>
                </div>
            </div>
            
        </div>
        <div className='sobreMi'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, quibusdam. Esse ipsam fugit a corporis laborum culpa expedita consectetur.</p>
        </div>
        </div>
    )
}

export default AlumnoMincard;