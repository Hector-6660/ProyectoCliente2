import './App.css';
import Cabecera from './componentes/Cabecera/Cabecera';
import Pie from './componentes/Pie/Pie';
import Home from "./paginas/Home/Home";
import Empresa from './paginas/Empresa/Empresa';
import CentroEducativo from './paginas/CentroEducativo/CentroEducativo';
import Alumno from './paginas/Alumno/Alumno';
import SelectorIdioma from './componentes/SelectorIdioma/SelectorIdioma';
import IdiomaContext from './contextos/IdiomaContext';
import { Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';

function App() {

  const espanol = "es";

    const [idiomaElegido, setIdiomaElegido] = useState(espanol);

    function manejarSeleccionIdioma(valor) {
        setIdiomaElegido(valor);
    }

  return (
    <div>
        <header>
          <Cabecera></Cabecera>
        </header>

        <SelectorIdioma idioma={idiomaElegido} manejarSeleccion={manejarSeleccionIdioma}></SelectorIdioma>
        <IdiomaContext.Provider value={idiomaElegido}>

          <Routes>
            <Route path="/" element={<Home></Home>}>
            </Route>
            <Route path="/empresa" element={<Empresa></Empresa>}>     
            </Route>
            <Route path="/centroeducativo" element={<CentroEducativo></CentroEducativo>}>     
            </Route>
            <Route path="/alumno" element={<Alumno></Alumno>}>     
            </Route>
          </Routes>

        </IdiomaContext.Provider>
    </div>
  );
}

export default App;
         

