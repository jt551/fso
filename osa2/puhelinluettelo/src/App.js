import React, { useState, useEffect } from 'react'
import PrintContacts from "./components/PrintContacts"
import Filter from './components/Filter'
import NewPersonForm from './components/NewPersonForm'
import jsonService from './services/Contacts'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter] = useState('')
  const [errorMsg, setErrorMsg] = useState(null)
  const [notifyMsg, setNotifyMsg] = useState(null)

  useEffect(() => {
    jsonService
      .getAll()
      .then(response => setPersons(response))
      .catch(error => {setErrorMsg('connection error')
      setTimeout(()=> {
        setErrorMsg(null)
      }, 3000)
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
      if(window.confirm(`${newName} exists, do you want to update the number?`)){
      const updateobj = persons.find(def => def.name === newName)
      updateobj.number = newNumber
      jsonService
      .update(updateobj.id, updateobj)
      .then(response => {
        setPersons(persons.map(person => person.id !== updateobj.id ? person : response ))
        setNotifyMsg(`${newName} updated`)
        setNewName('')
        setNewNumber('')
        setTimeout(()=> {
          setNotifyMsg(null)
        }, 3000)
      })
      .catch(error => {
        setErrorMsg('update error')
        setTimeout(()=> {
          setErrorMsg(null)
        }, 3000)
      })
      }
    } else{
      const contactObject = {
        name: newName,
        number: newNumber
      }
      jsonService
      .create(contactObject)
      .then(response => {
        setPersons(persons.concat(response))
        setNotifyMsg(`${newName} created`)
        setNewName("");
        setNewNumber("");
        setTimeout(()=> {
          setNotifyMsg(null)
        }, 3000)
      })
      .catch(error => {setErrorMsg('error while creating entry')
        setTimeout(()=> {
          setErrorMsg(null)
        }, 3000)
      })

      
    }
           
    }
  

  return (
    <div>
    <h2>Phonebook</h2>
        <Notification message={notifyMsg} err={errorMsg}/>
        <Filter filter={filter} handleFilterChange={handleFilterChange}/>
        <NewPersonForm formSubmit={formSubmit} newName={newName} handleChange={handleChange} newNumber={newNumber} handleNumChange={handleNumChange}/>
        <PrintContacts contacts={persons} filter={filter} persons={persons} setPersons={setPersons} setNotifyMsg={setNotifyMsg} setErrorMsg={setErrorMsg}/>
      
    </div>
  );


}

export default App;