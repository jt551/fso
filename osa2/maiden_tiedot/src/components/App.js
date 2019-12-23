import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './Filter.js'
import Results from './Results.js'


const App = () => {
  const [countries, setCountries] = useState([]) 
  const [filter, setFilter] = useState('')
  
  
  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
     <Filter filter={filter} handleFilterChange={handleFilterChange}/>
     <Results countries={countries} filter={filter} setFilter={setFilter}/>
    
    </div>
  );
}
export default App;
