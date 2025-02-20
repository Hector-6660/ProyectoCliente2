import { useState } from "react";
import './SelectorIdioma.css';

const SelectorIdioma = (props) => {

    function asignarIdioma(event) {
        props.manejarSeleccion(event.target.value);
    }

    return (
        <div className="botonesIdiomas" id="paises" value={props.idioma} onChange={asignarIdioma}>
            <button className="botonIdioma"><img className="imagenIdioma" src="/src/assets/flag-for-flag-spain-svgrepo-com.svg" value="es"></img></button>
            <button className="botonIdioma"><img className="imagenIdioma" src="/src/assets/united-kingdom-uk-svgrepo-com.svg" value="en"></img></button>
        </div> 
    )
}

export default SelectorIdioma;