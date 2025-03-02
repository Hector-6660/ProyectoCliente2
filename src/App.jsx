import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Cabecera from './componentes/Cabecera/Cabecera';
import Home from "./paginas/Home/Home";
import Empresa from './paginas/Empresa/Empresa';
import BusquedaProyectos from './paginas/BusquedaProyectos/BusquedaProyectos';
import BusquedaAlumnos from './paginas/BusquedaAlumnos/BusquedaAlumnos';
import CentroEducativo from './paginas/CentroEducativo/CentroEducativo';
import Alumno from './paginas/Alumno/Alumno';
import IdiomaContext from './contextos/IdiomaContext';

function App() {
  const [idioma, setIdioma] = useState('es');
  const [familiaCodigo, setFamiliaCodigo] = useState('');
  const [competenciaNombre, setCompetenciaNombre] = useState('');

  const manejarSeleccion = (nuevoIdioma) => {
    setIdioma(nuevoIdioma);
  };

  const handleFamiliaCodigo = (codigoFamilia) => {
    setFamiliaCodigo(codigoFamilia);
  }

  const handleCompetenciaNombre = (nombreCompetencia) => {
    setCompetenciaNombre(nombreCompetencia);
  }

  return (
    <div>
      <IdiomaContext.Provider value={idioma}>
        <header>
          <Cabecera manejarSeleccion={manejarSeleccion} idioma={idioma}></Cabecera>
        </header>

        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/empresa" element={<Empresa></Empresa>}></Route>
          <Route path="/empresa/proyectos" element={<BusquedaProyectos handleFamiliaCodigo={handleFamiliaCodigo} familiaCodigo={familiaCodigo}></BusquedaProyectos>}></Route>
          <Route path="/empresa/alumnos" element={<BusquedaAlumnos handleCompetenciaNombre={handleCompetenciaNombre} handleFamiliaCodigo={handleFamiliaCodigo} familiaCodigo={familiaCodigo} competenciaNombre={competenciaNombre}></BusquedaAlumnos>}></Route>
          <Route path="/centroeducativo" element={<CentroEducativo></CentroEducativo>}></Route>
          <Route path="/alumno" element={<Alumno></Alumno>}></Route>
        </Routes>
      </IdiomaContext.Provider>
    </div>
  );
}

export default App;
         

