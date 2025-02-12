import './App.css';
import Cabecera from './componentes/Cabecera/Cabecera';
import Pie from './componentes/Pie/Pie';
import Home from "./paginas/Home/Home";
import Empresa from './paginas/Empresa/Empresa';
import CentroEducativo from './paginas/CentroEducativo/CentroEducativo';
import Alumno from './paginas/Alumno/Alumno';
import { Routes, Route } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <div>
        <Cabecera></Cabecera>

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
    </div>
  );
}

export default App;
         

