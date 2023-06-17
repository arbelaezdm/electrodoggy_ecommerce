import React from 'react';
import LastProduct from './LastProduct';
import LastUser from './LastUser'

import '../assets/css/last.css'

function Last(){
    return(
        <React.Fragment>
            <div className='last'>
                <LastProduct />
                <LastUser /> 
            </div>
        
        </React.Fragment>
    )
}

export default Last