import React from 'react';

const PrintContact = (props) => {
    return (
        <li className="list-group-item">{props.name} : {props.number}</li>
 
    )
}

export default PrintContact