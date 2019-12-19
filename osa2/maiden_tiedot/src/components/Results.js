import React from 'react'
import FilterCountries from './FilterCountries'

const Results = (props) => {
    const countries = props.countries;
    const query = props.filter;
    let results = [];

    results = FilterCountries(countries, query);
    console.log(results);
    

    if(results.length > 10){
        return (
            <div>
            <p>Too many results...</p>
            </div>
        )
    }
    else if(results.length < 11 && results.length > 1){
    return (
        <div>
            <ul>
            {results.map((c, index) => <li key={index}>{c.name}</li>)}
            </ul>
        </div>
    )
    }
    else if(results.length === 1){
        return (
            <div>
            {results.map((c, index)=> 
            <div key={index}>
            <h3>{c.name}</h3>
            <p>Capital {c.capital}</p>
            <p>Population {c.population}</p>
            <h4>Languages</h4>
            <ul>
            {c.languages.map((l, index) => <li key={index}>{l.name}</li>)}
            </ul>
            <img src={c.flag} alt="Flag" width="150" height="100" />
            </div>
            )}
            </div>
        )
    }
    return (
        <div>
            <p>Default</p>
        </div>
    )
        
    

}

export default Results;