import React from "react";
import FilterItems from './FilterItems';
import PrintContact from './PrintContact'
import jsonService from '../services/Contacts'



const PrintContacts = (props) => {
  const prefilter = props.contacts;
  const filter = props.filter;
  
  const removeContact = (id) => {
    if(window.confirm("Remove this contact?")){
      const rm = jsonService.remove(id);
      rm
      .then(console.log(rm))
      .catch(error => console.log(error)
      )
      props.setPersons(props.persons.filter( con => con.id !== id))
    }    
  }  
  
  const result = FilterItems(prefilter, filter);
  console.log(result);
  
    return (
        <div>
          <h1>Contacts</h1>
          
            {result.map((res, index )=>
            <div className="row" key={index}>
               <PrintContact key={res.name} name={res.name} number={res.number}/> <button className="btn btn-outline-danger btn-sm" onClick={()=> removeContact(res.id)}>Delete</button>
            </div>)}
          
        </div>
      )
}

export default PrintContacts;
