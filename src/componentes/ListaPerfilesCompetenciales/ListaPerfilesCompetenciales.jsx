import React, { useEffect, useState } from 'react';
import BotonLista from '../BotonLista/BotonLista';

const ListaPerfilesCompetenciales = ({ handleCompetenciaNombre }) => {
    const [competencias, setCompetencias] = useState([]);
    const [selectedCompetencia, setSelectedCompetencia] = useState('');

    const apiPerfComp = 'http://marcapersonalfp.test/api/v1/competencias';
    

    useEffect(() => {
        fetch(apiPerfComp)
            .then(response => response.json())
            .then(data => setCompetencias(data))
    }, []);

    const handleClick = (event) => {
        const value = event.target.value;
        const newValue = selectedCompetencia === value ? '' : value;
        setSelectedCompetencia(newValue);
        handleCompetenciaNombre(newValue);
    };

    return (
        <div className='estiloFiltro'>
            <h3>Filtra por perfil competencial</h3>
            <div className='filtro'>
                {competencias.map((competencia, index) => (
                    <BotonLista key={index} nombre={competencia.nombre} valor={competencia.nombre} onClick={handleClick}/>
                ))}
            </div>
        </div>
    )
}

export default ListaPerfilesCompetenciales;