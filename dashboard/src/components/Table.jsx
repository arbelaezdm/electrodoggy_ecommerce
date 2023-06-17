import React from 'react';

import '../assets/css/table.css'

function Table(props){
    return (
        <React.Fragment>
            <div>
                <table>
            <thead>
            <tr>
                <td> {props.titles} </td>
            </tr>
            </thead>
            <tbody>
                <tr>
                <td>{props.content}</td>
                </tr>
                </tbody>
                
                </table>
            </div>
            
        </React.Fragment>
    )
}

export default Table