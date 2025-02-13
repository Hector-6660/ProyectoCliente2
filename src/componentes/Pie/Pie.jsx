import React from 'react';
import './Pie.css';
import { Link } from 'react-router-dom';

const Pie = () => {

    return (
        <footer>
            <div className='contadorEmpProAlu'>
                <div>
                    <h4>Empresas</h4>
                    <p>0</p>
                </div>
                <div>
                    <h4>Proyectos</h4>
                    <p>0</p>
                </div>
                <div>
                    <h4>Alumnos</h4>
                    <p>0</p>
                </div>
            </div>

            <a href='https://cifpcarlos3.es/es' className='enlaceWebC3'><h2>CIFP Carlos III</h2></a>
            <p>C/ Carlos III, 30201 - Cartagena | 30019702@murciaeduca.es | 968321301</p>

            <a href='https://www.facebook.com/cifpcarlos3'><img src='/src/assets/facebook-svgrepo-com.svg' className='iconoRedSocial'></img></a>
            <a href='https://twitter.com/cifpcarlos3'><img src='/src/assets/twitter-rounded-com.svg' className='iconoRedSocial'></img></a>
            <a href='https://www.instagram.com/cifpcarlos3/'><img src='/src/assets/instagram-svgrepo-com.svg' className='iconoRedSocial'></img></a>
            <a href='https://www.tiktok.com/@cifpcarlos3'><img src='/src/assets/brand-tiktok-sq-svgrepo-com.svg' className='iconoRedSocial'></img></a>
            <a href='https://www.youtube.com/c/cifpcarlosiiicartagena'><img src='/src/assets/youtube-168-svgrepo-com.svg' className='iconoRedSocial'></img></a>

            <div className='finalFooter'>
                <img src='/src/assets/mp-logoReves.png' className='logoFooter'></img>
                <p className='textoFooter'><strong>Marca Personal FP</strong> | Diseño Web CFGS Desarrollo de Aplicaciones Web 2023</p>
            </div>
        </footer>
    )

}

export default Pie;