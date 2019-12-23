import React, {useEffect} from 'react'
import axios from 'axios'
const Forecast = (props) => {
  const myCity = props.city;
  const set = props.setForecast;
    
        useEffect(() => {
            axios
              .get(`https://api.oceandrivers.com:443/v1.0/getAemetStation/${myCity}/lastdata/`)
              .then(response => {
                set(response.data)
              })
          }, [set, myCity])
    
    return (
      <div>
        <p>Weather in {myCity} : </p>
      </div>
    );
}
export default Forecast;