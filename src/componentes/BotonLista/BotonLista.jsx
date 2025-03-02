import React from 'react';
import './BotonLista.css';

const BotonLista = ({ nombre, valor, onClick }) => {
    return (
        <div>
            <div className="customCheckBoxHolder">
                <input type="checkbox" id={nombre} className="customCheckBoxInput" value={valor} onClick={onClick}/>
                <label htmlFor={nombre} className="customCheckBoxWrapper">
                    <div className="customCheckBox">
                        <div className="inner">{nombre}</div>
                    </div>
                </label>
            </div>
        </div>
    )
}

export default BotonLista;