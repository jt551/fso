import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './Filter.js'
import Results from './Results.js'
import CapitalWeather from './CapitalWeather'

const App = () => {
  const [countries, setCountries] = useState([]) 
  const [filter, setFilter] = useState('')
  const [forecast, setForecast] = useState({})
  
  
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
     <Results countries={countries} filter={filter} setFilter={setFilter} setForecast={setForecast}/>
     <CapitalWeather forecast={forecast} />
    </div>
  );
}
export default App;
