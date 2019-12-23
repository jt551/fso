/*import React, {useEffect} from 'react'
import axios from 'axios'
const Forecast = (props) => {
    
    
        useEffect(() => {
            axios
              .get('https://api.oceandrivers.com:443/v1.0/getAemetStation/aeropuertopalma/lastdata/')
              .then(response => {
                props.setForecast(response.data);
                console.log('axios .then : ' + response.data);
                
              })
          }, [])
    
    return (
      <div>
        <p></p>
      </div>
    );
}
export default Forecast;*/