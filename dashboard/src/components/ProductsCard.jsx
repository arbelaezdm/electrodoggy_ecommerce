import React from 'react';
import Card from './Card';
import { useState, useEffect } from 'react';

function ProductsCard(){

    const [products, setProducts] = useState([0])

    useEffect(()=>{
        console.log('se montó al componente');
        fetch('http://localhost:3030/api/products/')
        .then(response => response.json())
        .then(data => {
            setProducts(data.data.count)
        })
        .catch(error => console.error(error));
    },[])

    useEffect(()=>{
        console.log('se actualizó el componente');
    },[])

    useEffect(()=>{
        return()=> console.log('se desmontó el componente')
    },[products])

    return(
            <Card title="Total de productos" cuantity={products} /> 
    )
}

export default ProductsCard