import { faker } from '@faker-js/faker';
import axios from 'axios';
import { useEffect, useState } from 'react';

const ZipCodeAPI = () => {
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  const location = faker.location.zipCode('#####');
  // const location = '08828'

  const apikey = "27738e80-9554-11ee-82ee-999cd3256f0f"
  // location api from metadapi.com
  useEffect(() => {
    axios.get(`https://app.zipcodebase.com/api/v1/search?apikey=${apikey}&codes=${location}&country=us`)
      .then(response => {
        const zipCode = location
        const cityresponse = response.data.results[zipCode][0].city;
        const stateresponse = response.data.results[zipCode][0].state;
        setCity(cityresponse);
        setState(stateresponse);
      })
      .catch(error => {
        console.log("There was a problem finding home: ", error);
      });
  }, [location, apikey]);

  return (
        <div>
          { city }, { state }
        </div>
  )
}
export default ZipCodeAPI;