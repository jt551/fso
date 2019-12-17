import React, { useState } from 'react'
import PrintContacts from "./components/PrintContacts"

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter] = useState('')

  const handleChange = (event) => {
    setNewName(event.target.value);
  }
  const handleNumChange = (event) => {
    setNewNumber(event.target.value);
  }
  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  const formSubmit = (event) => {
    event.preventDefault()

    const search = persons.find(function (obj) {
      return obj.name === newName;
    })
    
    if(search){
      window.alert(newName + ' already exists.');
    } else{
      const contactObject = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(contactObject))
      setNewName('')
      setNewNumber('')
    }
           
    }
  

  return (
    <div>
    <h2>Phonebook</h2>
    <label htmlFor="filterinput">Filter results</label>
    <input
            type="text"
            className="form-control"
            id="filterinput"
            placeholder="Filter"
            value={filter}
            onChange={handleFilterChange}
          />
      
         <form onSubmit={formSubmit}>
        <div className="form-group">
          <label htmlFor="nameinput">Add new name</label>
          <input
            type="text"
            className="form-control"
            id="nameinput"
            placeholder="Name"
            value={newName}
            onChange={handleChange}
          />
          <label htmlFor="phoneinput">number</label>
          <input
            type="text"
            className="form-control"
            id="phoneinput"
            placeholder="Number"
            value={newNumber}
            onChange={handleNumChange}
          />
        </div>

        <button className="btn btn-primary btn-large form-group" type="submit">
         Add
        </button>
      </form>
      <PrintContacts contacts={persons} filter={filter}/>
      
    </div>
  );


}

export default App;