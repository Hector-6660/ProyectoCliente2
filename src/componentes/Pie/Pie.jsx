import React from 'react';
import './Pie.css';
import { Link } from 'react-router-dom';

const Pie = () => {

    return (
        <footer>
            <h2>CIFP Carlos III</h2>
            <p>C/ Carlos III, 30201 - Cartagena | 30019702@murciaeduca.es | 968321301</p>

            <img src='/src/assets/facebook-svgrepo-com.svg' className='iconoRedSocial'></img>
            <img src='/src/assets/twitter-rounded-com.svg' className='iconoRedSocial'></img>
            <img src='/src/assets/instagram-svgrepo-com.svg' className='iconoRedSocial'></img>
            <img src='/src/assets/brand-tiktok-sq-svgrepo-com.svg' className='iconoRedSocial'></img>
            <img src='/src/assets/youtube-168-svgrepo-com.svg' className='iconoRedSocial'></img>

            <div className='finalFooter'>
                <img src='/src/assets/mp-logoReves.png' className='logoFooter'></img>
                <p className='textoFooter'><strong>Marca Personal FP</strong> | Diseño Web CFGS Desarrollo de Aplicaciones Web 2023</p>
            </div>
        </footer>
    )

}
export default Pie;