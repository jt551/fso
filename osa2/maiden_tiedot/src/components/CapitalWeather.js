import React from 'react'

const CapitalWeather = (props) => {
    if(props.forecast.TEMPERATURE){
        console.log("props cap weather ",props.forecast);
        
        return (
            <div>
                <p>Temperature : {props.forecast.TEMPERATURE}</p>
                <p>Wind from : {props.forecast.TWS} to {props.forecast.TWS_GUST} </p>
            </div>
        )
    }
    return (
        <div>

        </div>
    )
    
}

export default CapitalWeather;