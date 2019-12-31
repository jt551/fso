import React from "react";
import FilterItems from './FilterItems';
import PrintContact from './PrintContact'
import jsonService from '../services/Contacts'



const PrintContacts = (props) => {
  const prefilter = props.contacts;
  const filter = props.filter;
  
  const removeContact = (id, name, setNotifyMsg) => {
    if(window.confirm(`Remove contact ${name}?`)){
      const rm = jsonService.remove(id);
      rm
      .then(setNotifyMsg(`${name} deleted`))
      .then(setTimeout(()=> {
        setNotifyMsg(null)
      }, 3000))
      .catch(error => {props.setErrorMsg('error')
        setTimeout(()=> {
          props.setErrorMsg(null)
        }, 3000)
      })
      
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
               <PrintContact key={res.name} name={res.name} number={res.number}/> <button className="btn btn-outline-danger btn-sm" onClick={()=> removeContact(res.id, res.name, props.setNotifyMsg, props.setErrorMsg)}>Delete</button>
            </div>)}
          
        </div>
      )
}

export default PrintContacts;
