import React from "react";
import './MenuEmpresa.css';
import { Link } from 'react-router-dom';

const MenuEmpresa = () => {

    return (
        <nav>
            <ul className="menuEmpresa">
                <li><Link to="/empresa" className="elemento">[ Empresa ]</Link></li>
                <li><Link to="/empresa/proyectos" className="elemento">Proyectos</Link></li>
                <li><Link to="/empresa/alumnos" className="elemento">Alumnos</Link></li>
            </ul>
        </nav>
    )
}

export default MenuEmpresa;