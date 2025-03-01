import React, { useEffect, useState } from 'react';
import BotonLista from '../BotonLista/BotonLista';

const ListaFamiliasProf = () => {
    const [competencias, setCompetencias] = useState([]);

    const apiPerfComp = 'http://marcapersonalfp.test/api/v1/competencias';
    

    useEffect(() => {
        fetch(apiPerfComp)
            .then(response => response.json())
            .then(data => setCompetencias(data))
    }, []);

    return (
        <div className='estiloFiltro'>
            <h3>Filtra por perfil competencial</h3>
            <div className='filtro'>
                {competencias.map((competencia, index) => (
                    <BotonLista key={index} nombre={competencia.nombre} />
                ))}
            </div>
        </div>
    )
}

export default ListaFamiliasProf;