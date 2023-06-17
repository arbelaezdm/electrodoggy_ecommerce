import React from 'react';
import {Link} from 'react-router-dom'
import image from '../assets/img/logo.png'

import '../assets/css/menu.css'

function Menu (){
    return (
        <React.Fragment>
              <ul> 
                <li>
                <Link to="/">
                    <div>
                        <img src={image} alt="Electrodoggy"/>
                    </div>
                </Link>
                </li>
                <li>
                  <h2>
                    Dashboard
                  </h2>
                </li>
                <li>
                    <Link className="link" to="/products">
                    <i class="fa-solid fa-list"></i>
                        <span>Productos</span>
                    </Link>
                </li> 
                <li>
                    <Link className="link" to="/users">
                    <i class="fa-solid fa-user"></i>
                        <span>Usuarios</span>
                    </Link>
                </li> 
                <li>
                    <Link className="link" to="/categories">
                    <i class="fas fa-table"></i>
                        <span>Categorías</span>
                    </Link>
                </li> 
              </ul>
        </React.Fragment>
      );
}

export default Menu
