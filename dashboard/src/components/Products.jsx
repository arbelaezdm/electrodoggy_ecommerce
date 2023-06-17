import React from 'react';

import { useState, useEffect } from 'react';

import '../assets/css/table.css'
import Pagination from './Pagination';

function Products(){
    const [products, setProducts] = useState([0]);
    const [pagina, setPagina] = useState(1);
    const [porPagina, setPorPagina] = useState(5);

/* Calculating the maximum number of pages. */
    const maximo = products.length / porPagina
    // console.log(maximo);

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


    return(
        <div className='contentTable'>
        <h2 className='title'>Listado de Productos</h2>
        <table>
            <thead>
            <tr className='headerTable'>
                <th>Nombre</th>
                <th>Marca</th>
            </tr>
            </thead>
            {products
            .slice(
                (pagina-1) * porPagina, 
                (pagina-1) * porPagina + porPagina
            )
            .map((us , i)=>{
                return(
                    <tr key={i}>
                  <td >
                        {us.name}
                  </td> 
                  <td >
                        {us.brands}
                  </td>
                  </tr>)
                })}  
            <Pagination pagina={pagina} setPagina={setPagina} maximo={maximo}/>
        </table>
        </div>
    )
    
}

export default Products