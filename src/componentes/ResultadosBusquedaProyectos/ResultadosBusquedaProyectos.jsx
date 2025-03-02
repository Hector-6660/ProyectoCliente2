import React, { useEffect, useState } from 'react';
import ProyectoMincard from '../ProyectoMincard/ProyectoMincard';
import './ResultadosBusquedaProyectos.css';

const ResultadosBusquedaProyectos = ({ familiaCodigo }) => {
    const [proyectos, setProyectos] = useState([]);

    const apiProy = 'http://marcapersonalfp.test/api/v1/proyectos';

    useEffect(() => {
        fetch(apiProy)
            .then(response => response.json())
            .then(data => {
                if (familiaCodigo) {
                    const proyectosFiltrados = data.filter(proyecto => 
                        proyecto.ciclos.some(ciclo => ciclo.codFamilia === familiaCodigo)
                    );
                    setProyectos(proyectosFiltrados);
                    if (proyectosFiltrados.length === 0) {
                        alert('No hay proyectos con esta familia profesional');
                    }
                } else {
                    setProyectos(data);
                }
            });
    }, [familiaCodigo]);

    return (
        <div>
            <h3>Resultados</h3>
            <div className='resultados'>
                {proyectos.map((proyecto, index) => (
                    <ProyectoMincard 
                        key={index}
                        dominioProy={proyecto.dominio}
                        docenteProy={proyecto.docente_id}
                        cicloProy={proyecto.ciclos.map(ciclo => ciclo.codCiclo).join(', ')}
                    />
                ))}
            </div>
        </div>
    )
}

export default ResultadosBusquedaProyectos;