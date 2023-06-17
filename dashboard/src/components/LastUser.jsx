import React from 'react';
import { useState, useEffect } from 'react';
// import {Link} from 'react-router-dom'

import '../assets/css/lastUser.css'

function LastUser(){
    const [users, setUsers] = useState([0])

    useEffect(()=>{
        console.log('se montó al componente');
        fetch('http://localhost:3030/user/usersList')
        .then(response => response.json())
        .then(data => {
            setUsers(data.users)
        })
        .catch(error => console.error(error));
    },[])

    useEffect(()=>{
        console.log('se actualizó el componente');
    },[])

    useEffect(()=>{
        return()=> console.log('se desmontó el componente')
    },[users])

    let lUser = users.length - 1
    console.log(lUser)
    let ultimoU = users[lUser]

    return (
        <React.Fragment>
            <div className='lastUser'> 
            <h2>Último Usuario</h2>
                <h4>Nombre: {ultimoU[1]}</h4>
                <h4>Correo: {ultimoU[2]}</h4>
                {/* <Link to={ultimoU[3]} className="button">
                    <span className='usuario'>Ver usuario</span>
                </Link> */}
            </div>
        </React.Fragment>
    )
}

export default LastUser