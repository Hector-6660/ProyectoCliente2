import React, { useEffect, useState } from 'react';
import BotonLista from '../BotonLista/BotonLista';
import './ListaFamiliasProf.css';

const ListaFamiliasProf = () => {
    const [familias, setFamilias] = useState([]);

    const apiFamProf = 'http://marcapersonalfp.test/api/v1/familias_profesionales';

    useEffect(() => {
        fetch(apiFamProf)
            .then(response => response.json())
            .then(data => setFamilias(data))
    }, []);

    return (
        <div className='estiloFiltro'>
            <h3>Filtra por familia profesional</h3>
            <div className='filtro'>
                {familias.map((familia, index) => (
                    <BotonLista key={index} nombre={familia.nombre} />
                ))}
            </div>
        </div>
    )
}

export default ListaFamiliasProf;