import React from "react";
import FilterItems from './FilterItems';
import PrintContact from './PrintContact'



const PrintContacts = (props) => {
  const prefilter = props.contacts;
  const filter = props.filter;
  console.log("printcontacts props ", props);
  
  
  const result = FilterItems(prefilter, filter);
  console.log(result);
  
    return (
        <div>
          <h1>Contacts</h1>
          <ul>
            {result.map(res => <PrintContact key={res.name} name={res.name} number={res.number}/>)}
            
          </ul>
        </div>
      )
}

export default PrintContacts
/*
{result.map(con => <li key={con.name}>{con.name} : {con.number}</li>)}
*/