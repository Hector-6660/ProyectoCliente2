import React from 'react';
import MenuEmpresa from '../../componentes/MenuEmpresa/MenuEmpresa';
import ListaFamiliasProf from '../../componentes/ListaFamiliasProf/ListaFamiliasProf';

const BusquedaProyectos = () => {

    return (
        <>
            <MenuEmpresa></MenuEmpresa>
            <h2>Búsqueda de Proyectos</h2>
            <ListaFamiliasProf></ListaFamiliasProf>
        </>
    )
}

export default BusquedaProyectos;