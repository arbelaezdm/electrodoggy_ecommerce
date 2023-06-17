import React from 'react';
import {Link} from 'react-router-dom'


import '../assets/css/notFound.css'
import image from '../assets/img/error-image.jpg'

function NotFound(){

    return (
        <React.Fragment>
            <div className='imageContent' >
                <div className='imgProducto-error' style={{width: 300 +'px'}}><img src={image} alt="Producto"/></div>
                <div className='textos-error'>
                    <h2>Ups!! Pagina equivocada</h2>
                    <Link to='/' className="button">
                    <span className='btn-error'>Volver a Inicio</span>
                </Link>
               </div> 
            </div>
        </React.Fragment>
    )
}

export default NotFound;