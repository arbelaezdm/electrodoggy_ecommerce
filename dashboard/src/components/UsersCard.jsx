import React from 'react';
import Card from './Card';
import { useState, useEffect } from 'react';

function UsersCard(){

    const [users, setUsers] = useState([0])

    useEffect(()=>{
        console.log('se montó al componente');
        fetch('http://localhost:3030/user/usersList')
        .then(response => response.json())
        .then(data => {
            setUsers(data.total)
        })
        .catch(error => console.error(error));
    },[])

    useEffect(()=>{
        console.log('se actualizó el componente');
    },[])

    useEffect(()=>{
        return()=> console.log('se desmontó el componente')
    },[users])

    return(

            <Card title="Total de usuarios" cuantity={users} /> 

    )
}

export default UsersCard