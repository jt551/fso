import React from 'react'
import FilterCountries from './FilterCountries'
import TooManyResults from './TooManyResults';
import SeveralResults from './SeveralResults';
import OneResult from './OneResult'

const Results = (props) => {
    const countries = props.countries;
    const query = props.filter;
    let results = [];

    results = FilterCountries(countries, query);
    console.log(results);
    

    if(results.length > 10){
        return (
            <TooManyResults />
        )
    }
    else if(results.length < 11 && results.length > 1){
    return (
        <SeveralResults results={results} setFilter={props.setFilter}/>
    )
    }
    else if(results.length === 1){
        return (
           <OneResult results={results} /> 
        )
    }
    return (
        <div>
            <p>No Results</p>
        </div>
    )
        
    

}

export default Results;