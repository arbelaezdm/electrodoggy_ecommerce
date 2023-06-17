import React from 'react';
import Card from './Card';
import { useState, useEffect } from 'react';

function CategoriesCard(){

    const [categories, setCategories] = useState([0])

    useEffect(()=>{
        console.log('se montó al componente');
        fetch('http://localhost:3030/api/products/')
        .then(response => response.json())
        .then(data => {
            setCategories(data.data.countByCategory)
        })
        .catch(error => console.error(error));
    },[])

    useEffect(()=>{
        console.log('se actualizó el componente');
    },[categories])

    useEffect(()=>{
        return()=> console.log('se desmontó el componente')
    },[categories])

    return(

            <Card title="Total de categorias" cuantity= {Object.keys(categories).length} /> 

    )
}

export default CategoriesCard