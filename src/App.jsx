import './App.css';
import CabeceraRM from './paginas/CabeceraRM/CabeceraRM';
import CuerpoRM from './paginas/CuerpoRM/CuerpoRM';
import Home from "./paginas/Home/Home";
import { Routes, Route } from 'react-router-dom';


function App() {

  return (
    <div>
        <CabeceraRM></CabeceraRM>

        <Routes>
            <Route path="/"
                element={<Home></Home>} >     
            </Route>   
            <Route path="/:ciudad"
                element={<CuerpoRM></CuerpoRM>} >     
            </Route>   
        </Routes>

    </div>
  );
}

export default App;
         

