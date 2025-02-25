import React from 'react';
import './BotonLista.css';

const BotonLista = ({ nombre }) => {
    return (
        <div>
            <div className="customCheckBoxHolder">
                <input type="checkbox" id={nombre} className="customCheckBoxInput"/>
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