import React from 'react'
import Forecast from './Forecast'

const OneResult = ( props ) => {
  
    return (
      <div>
        {props.results.map((c, index) => (
          <div key={index}>
            <h3>{c.name}</h3>
            <p>Capital : {c.capital}</p>
            <p>Population : {c.population}</p>
            <h5>Languages</h5>
            <ul>
              {c.languages.map((l, index) => (
                <li key={index}>{l.name}</li>
              ))}
            </ul>
            <img src={c.flag} alt="Flag" width="150" height="100" />
            <Forecast city={c.capital} setForecast={props.setForecast}/>
          </div>
        ))}
      </div>
    );
}

export default OneResult;