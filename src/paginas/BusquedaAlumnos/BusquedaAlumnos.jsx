import React from 'react';
import MenuEmpresa from '../../componentes/MenuEmpresa/MenuEmpresa';
import ListaFamiliasProf from '../../componentes/ListaFamiliasProf/ListaFamiliasProf';
import ListaPerfilesCompetenciales from '../../componentes/ListaPerfilesCompetenciales/ListaPerfilesCompetenciales';
import ResultadosBusquedaAlumnos from '../../componentes/ResultadosBusquedaAlumnos/ResultadosBusquedaAlumnos';

const BusquedaAlumnos = ({ handleCompetenciaNombre, handleFamiliaCodigo, familiaCodigo, competenciaNombre }) => {

    return (
        <>
            <MenuEmpresa></MenuEmpresa>
            <h2>Busca a tus Alumnos</h2>
            <ListaPerfilesCompetenciales handleCompetenciaNombre={handleCompetenciaNombre}></ListaPerfilesCompetenciales>
            <ListaFamiliasProf handleFamiliaCodigo={handleFamiliaCodigo}></ListaFamiliasProf>
            <ResultadosBusquedaAlumnos familiaCodigo={familiaCodigo} competenciaNombre={competenciaNombre}></ResultadosBusquedaAlumnos>
        </>
    )
}

export default BusquedaAlumnos;