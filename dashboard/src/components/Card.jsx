import React from 'react';
import PropTypes from 'prop-types';

import '../assets/css/card.css'

function Card(props){
    return(
        <div className='card'> 
            <div>
                <h3>{props.title}</h3>
                <h4>{props.cuantity}</h4>
            </div> 
        </div>
    )
}

/* DEFAULT */

Card.defaultProps = {
    title: 'No Title',
    cuantity: 'No cuantity',
}

/* PROPTYPES */

Card.propTypes = {
    atritutes: PropTypes.shape({
        title: PropTypes.string.isRequired,
        cuantity: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ]).isRequired,
    })
}



export default Card;