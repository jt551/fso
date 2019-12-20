import React from 'react'
import OneResult from './OneResult';

const SeveralResults = ( props ) => {
   const sendOne = (c) => {
    console.log('Buttonhandler severalresults : ', c);
    props.setFilter(c.name);
   }
    return (
      <div>
        <ul>
          {props.results.map((c, index) => (
              <div key={index} className='flex'>
              <li>{c.name}</li><button onClick={()=>{sendOne(c)}}> Go </button>
              </div>
            
          ))}
        </ul>
      </div>
    );
}

export default SeveralResults;