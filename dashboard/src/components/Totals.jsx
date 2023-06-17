import React from 'react';
import ProductsCard from './ProductsCard';
import UsersCard from './UsersCard';
import CategoriesCard from './CategoriesCard';

import '../assets/css/totals.css'

function Totals (){
    return (
        <div className='totals'>
            <ProductsCard />
            <UsersCard />
            <CategoriesCard />
        </div>
    )
}

export default Totals