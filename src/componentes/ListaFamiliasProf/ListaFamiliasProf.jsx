import React, { useEffect, useState } from 'react';
import BotonLista from '../BotonLista/BotonLista';
import './ListaFamiliasProf.css';

const ListaFamiliasProf = ({ handleFamiliaCodigo }) => {
    const [familias, setFamilias] = useState([]);
    const [selectedFamilia, setSelectedFamilia] = useState('');

    const apiFamProf = 'http://marcapersonalfp.test/api/v1/familias_profesionales';

    useEffect(() => {
        fetch(apiFamProf)
            .then(response => response.json())
            .then(data => setFamilias(data))
    }, []);

    const handleClick = (event) => {
        const value = event.target.value;
        const newValue = selectedFamilia === value ? '' : value;
        setSelectedFamilia(newValue);
        handleFamiliaCodigo(newValue);
    };

    return (
        <div className='estiloFiltro'>
            <h3>Filtra por familia profesional</h3>
            <div className='filtro'>
                {familias.map((familia, index) => (
                    <BotonLista key={index} nombre={familia.nombre} valor={familia.codigo} onClick={handleClick}/>
                ))}
            </div>
        </div>
    )
}

export default ListaFamiliasProf;