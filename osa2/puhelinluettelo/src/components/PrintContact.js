import React from 'react';

const PrintContact = (props) => {
    return (
        <li className="list-group-item col-lg-4">{props.name} : {props.number}</li>
 
    )
}

export default PrintContact