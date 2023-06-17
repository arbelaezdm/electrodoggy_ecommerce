import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'
import '../assets/css/pagination.css'

function Pagination({pagina, setPagina, maximo}){
    const [input, setInput] = useState(1)

    /**
     * When the user clicks the button, the input value is increased by 1 and the pagination value is
     * increased by 1.
     */
    const nextPage = () =>{
        setInput (parseInt(input) + 1);
        setPagina (parseInt(pagina) + 1);
    }
    /**
     * When the user clicks the previous page button, the input value is decreased by 1 and the pagina
     * value is decreased by 1.
     */
    const previousPage = () =>{
        setInput (parseInt(input) - 1);
        setPagina (parseInt(pagina) - 1);
    }

    /**
     * If the user presses the enter key, then set the page to the value of the input field. If the
     * value of the input field is less than 1, or greater than the maximum number of pages, or is not
     * a number, then set the page to 1 and the input field to 1. Otherwise, set the page to the value
     * of the input field.
     */
    const onKeyDown = e => {
        if (e.keyCode == 13) {
            setPagina(parseInt (e.target.value));
            if (
                parseInt(e.target.value < 1) ||
                parseInt(e.target.value) > Math.ceil (maximo) ||
                isNaN (parseInt (e.target.value))
            ) {
                setPagina(1);
                setInput(1);
            } else {
                setPagina (parseInt(e.target.value))
            }
        }
    };

   /**
    * OnChange is a function that takes an event as an argument and sets the input state to the value
    * of the event target.
    */
    const onChange = e =>{
        setInput(e.target.value);
    }

    
    return(
        <div className='paginationContainer'>
            <button disabled={pagina === 1 || pagina < 1} className='page' onClick={previousPage}><FontAwesomeIcon icon={faCircleArrowLeft} className='iconArrow' /></button>
            <input 
            onChange={e => onChange (e)}
            onKeyDown={e => onKeyDown(e)}
            type="text" 
            className='inputPage' 
            value={input}/>
            <p>de {maximo}</p>
            <button disabled={pagina === Math.ceil(maximo) || pagina > Math.ceil(maximo)} className='page' onClick={nextPage}><FontAwesomeIcon icon={faCircleArrowRight} className='iconArrow' /></button>
        </div>
    )
}

export default Pagination