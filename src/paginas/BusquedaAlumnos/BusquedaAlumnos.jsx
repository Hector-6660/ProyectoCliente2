import React from 'react';
import MenuEmpresa from '../../componentes/MenuEmpresa/MenuEmpresa';
import ListaFamiliasProf from '../../componentes/ListaFamiliasProf/ListaFamiliasProf';
import ListaPerfilesCompetenciales from '../../componentes/ListaPerfilesCompetenciales/ListaPerfilesCompetenciales';

const BusquedaAlumnos = () => {

    return (
        <>
            <MenuEmpresa></MenuEmpresa>
            <h2>Busca a tus Alumnos</h2>
            <ListaPerfilesCompetenciales></ListaPerfilesCompetenciales>
            <ListaFamiliasProf></ListaFamiliasProf>
        </>
    )
}

export default BusquedaAlumnos;