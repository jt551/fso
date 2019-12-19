import React, { useState, useEffect } from 'react'
import PrintContacts from "./components/PrintContacts"
import Filter from './components/Filter'
import NewPersonForm from './components/NewPersonForm'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

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
        <Filter filter={filter} handleFilterChange={handleFilterChange}/>
        <NewPersonForm formSubmit={formSubmit} newName={newName} handleChange={handleChange} newNumber={newNumber} handleNumChange={handleNumChange}/>
        <PrintContacts contacts={persons} filter={filter}/>
      
    </div>
  );


}

export default App;