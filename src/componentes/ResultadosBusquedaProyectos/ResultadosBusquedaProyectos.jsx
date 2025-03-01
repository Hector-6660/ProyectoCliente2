import React, { useEffect, useState } from 'react';
import ProyectoMincard from '../ProyectoMincard/ProyectoMincard';
import './ResultadosBusquedaProyectos.css';

const ResultadosBusquedaProyectos = () => {
    const [proyectos, setProyectos] = useState([]);

    const apiProy = 'http://marcapersonalfp.test/api/v1/proyectos';

    useEffect(() => {
        fetch(apiProy)
            .then(response => response.json())
            .then(data => setProyectos(data))
    }, []);

    return (
        <div>
            <h3>Resultados</h3>
            <div className='resultados'>
                {proyectos.map((proyecto, index) => (
                    <ProyectoMincard key={index} dominioProy={proyecto.dominio} docenteProy={proyecto.docente_id} cicloProy={proyecto.ciclos.codCiclo}/>
                ))}
            </div>
        </div>
    )
}

export default ResultadosBusquedaProyectos;