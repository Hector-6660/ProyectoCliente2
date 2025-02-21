import React from "react";
import './SelectorIdioma.css';

const SelectorIdioma = ({ manejarSeleccion }) => {

    function asignarIdioma(event) {
        const idioma = event.currentTarget.getAttribute('data-idioma');
        manejarSeleccion(idioma);
    }

    return (
        <div className="botonesIdiomas" id="paises">
            <button className="botonIdioma" data-idioma="es" onClick={asignarIdioma}>
                <img className="imagenIdioma" src="/src/assets/flag-for-flag-spain-svgrepo-com.svg" alt="Español" />
            </button>
            <button className="botonIdioma" data-idioma="en" onClick={asignarIdioma}>
                <img className="imagenIdioma" src="/src/assets/united-kingdom-uk-svgrepo-com.svg" alt="Inglés" />
            </button>
        </div>
    );
}

export default SelectorIdioma;