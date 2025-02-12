import React from 'react';
import './Home.css';
import Pie from '../../componentes/Pie/Pie';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <>
            <div className='imagenes'>
                <ul className="menu">
                    <li><Link to="/empresa"><img src="/src/assets/empresa - copia.jpg"/></Link></li>
                    <li><Link to="/centroeducativo"><img src="/src/assets/school - copia.jpg"/></Link></li>
                    <li><Link to="/alumno"><img src="/src/assets/student - copia.jpg"/></Link></li>
                </ul>
            </div>
        </>
    )
}

export default Home