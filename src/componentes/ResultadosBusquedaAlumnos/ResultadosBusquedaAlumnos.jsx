import React, { useEffect, useState } from 'react';
import AlumnoMincard from '../AlumnoMincard/AlumnoMincard';
import './ResultadosBusquedaAlumnos.css';

const ResultadosBusquedaAlumnos = ({ familiaCodigo, competenciaNombre }) => {
    const [alumnos, setAlumnos] = useState([]);

    const apiAlum = 'http://marcapersonalfp.test/api/v1/users';

    useEffect(() => {
        fetch(apiAlum)
            .then(response => response.json())
            .then(data => {
                if (familiaCodigo || competenciaNombre) {
                    let alumnosFiltrados = data

                    if (familiaCodigo) {
                        alumnosFiltrados = alumnosFiltrados.filter(alumno => 
                            alumno.ciclos.some(ciclo => ciclo.codFamilia === familiaCodigo)
                        );
                    }
    
                    if (competenciaNombre) {
                        alumnosFiltrados = alumnosFiltrados.filter(alumno => 
                            alumno.competencias.some(competencia => competencia.nombre === competenciaNombre)
                        );
                    }
    
                    setAlumnos(alumnosFiltrados);
    
                    if (alumnosFiltrados.length === 0) {
                        alert('No hay alumnos con estas especificaciones');
                    }

                    familiaCodigo = '';
                    competenciaNombre = '';
                } else {
                    setAlumnos(data);
                }
            });
    }, [familiaCodigo, competenciaNombre]);

    return (
        <div>
            <h3>Resultados</h3>
            <div className='resultados'>
                {alumnos.map((alumno, index) => (
                    <AlumnoMincard 
                        key={index}
                        nombreAlu={alumno.nombre}
                        apellidoAlu={alumno.apellidos}
                        idiomaAlu={alumno.idiomas.map(idioma => `${idioma.english_name} ${idioma.nivel}`).join(', ')}
                        cicloAlu={alumno.ciclos.map(ciclo => ciclo.codCiclo).join(', ')}
                    />
                ))}
            </div>
        </div>
    )
}

export default ResultadosBusquedaAlumnos;