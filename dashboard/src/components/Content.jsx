import React from 'react';
import Totals from './Totals';
import Last from './Last';

import '../assets/css/content.css'

function Content (){
    return (
        <React.Fragment>
            <div className='content'>
            <Totals/> 
            <Last />
            </div>
             
        </React.Fragment>
      );
}

export default Content