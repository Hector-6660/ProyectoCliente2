import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Cabecera from './componentes/Cabecera/Cabecera';
import Home from "./paginas/Home/Home";
import Empresa from './paginas/Empresa/Empresa';
import CentroEducativo from './paginas/CentroEducativo/CentroEducativo';
import Alumno from './paginas/Alumno/Alumno';
import IdiomaContext from './contextos/IdiomaContext';

function App() {

  const [idioma, setIdioma] = useState('es');

  const manejarSeleccion = (nuevoIdioma) => {
    setIdioma(nuevoIdioma);
  };

  return (
    <div>
      <IdiomaContext.Provider value={idioma}>
        <header>
          <Cabecera manejarSeleccion={manejarSeleccion} idioma={idioma}></Cabecera>
        </header>

          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/empresa" element={<Empresa></Empresa>}></Route>
            <Route path="/centroeducativo" element={<CentroEducativo></CentroEducativo>}></Route>
            <Route path="/alumno" element={<Alumno></Alumno>}></Route>
          </Routes>

      </IdiomaContext.Provider>
    </div>
  );
}

export default App;
         

