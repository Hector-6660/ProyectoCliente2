import './App.css';
import Cabecera from './componentes/Cabecera/Cabecera';
import Home from "./paginas/Home/Home";
import { Routes, Route } from 'react-router-dom';


function App() {

  return (
    <div>
        <Cabecera></Cabecera>

        <Routes>
            <Route path="/"
                element={<Home></Home>} >     
            </Route>   
            <Route path="/:elemento"
                element={<Home></Home>} >     
            </Route>   
        </Routes>

    </div>
  );
}

export default App;
         

