import React from 'react';
import { useState, useEffect } from 'react';

import '../assets/css/lastProduct.css'
// import image from '../assets/img/product.jpg'

function LastProduct(){
    const [products, setProducts] = useState([0])

    useEffect(()=>{
        console.log('se montó al componente');
        fetch('http://localhost:3030/api/products/')
        .then(response => response.json())
        .then(data => {
            setProducts(data.data.products)
        })
        .catch(error => console.error(error));
    },[])

    useEffect(()=>{
        console.log('se actualizó el componente');
    },[])

    useEffect(()=>{
        return()=> console.log('se desmontó el componente')
    },[products])

    let lProduct = products.length - 1
    console.log(lProduct)
    let ultimoP = products[lProduct]

    return (
        <React.Fragment>
            <div className='lastProduct'>
                {/* <div className='imgProducto'><img src={image} alt="Producto"/></div> */}
                <div className='textos'>
                    <h2>Último Producto</h2>
                <h4>Nombre: {ultimoP.name}</h4>
                <h4>Categoría: {ultimoP.category}</h4>
                <h4>Color: {ultimoP.color}</h4>
                <h4>Marca: {ultimoP.brands}</h4>
               </div> 
            </div>
        </React.Fragment>
    )
}

export default LastProduct