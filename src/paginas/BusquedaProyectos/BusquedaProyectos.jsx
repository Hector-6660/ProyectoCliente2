import React from 'react';
import MenuEmpresa from '../../componentes/MenuEmpresa/MenuEmpresa';
import ListaFamiliasProf from '../../componentes/ListaFamiliasProf/ListaFamiliasProf';
import ResultadosBusquedaProyectos from '../../componentes/ResultadosBusquedaProyectos/ResultadosBusquedaProyectos';

const BusquedaProyectos = ({ handleFamiliaCodigo, familiaCodigo }) => {

    return (
        <>
            <MenuEmpresa></MenuEmpresa>
            <h2>Búsqueda de Proyectos</h2>
            <ListaFamiliasProf handleFamiliaCodigo={handleFamiliaCodigo}></ListaFamiliasProf>
            <ResultadosBusquedaProyectos familiaCodigo={familiaCodigo}></ResultadosBusquedaProyectos>
        </>
    )
}

export default BusquedaProyectos;