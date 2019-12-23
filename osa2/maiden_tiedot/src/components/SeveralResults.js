import React from 'react'


const SeveralResults = ( props ) => {
   const sendOne = (c) => {
    console.log('Buttonhandler severalresults : ', c);
    props.setFilter(c.name);
   }
    return (
      <div>
        <ul className="list-group">
          {props.results.map((c, index) => (
              <div key={index} className="row">
              <li className="list-group-item">{c.name}</li><button className="btn btn-dark btn-small" onClick={()=>{sendOne(c)}}> Go </button>
              </div>
            
          ))}
        </ul>
      </div>
    );
}

export default SeveralResults;