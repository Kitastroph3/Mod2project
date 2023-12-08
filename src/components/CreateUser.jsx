import { faker } from '@faker-js/faker';
import axios from 'axios';
import { useEffect, useState } from 'react';

function CreateUser() {
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  const location = faker.location.zipCode('#####');
  // const location = '08828'
  
  // location api from metadapi.com
  const apikey = "27738e80-9554-11ee-82ee-999cd3256f0f"
  useEffect(() => {
    axios.get(`https://app.zipcodebase.com/api/v1/search?apikey=${apikey}&codes=${location}&country=us`)
      .then(response => {
        const zipCode = location
        // console.log(response.data.results[zipCode][0].city)
        const cityresponse = response.data.results[zipCode][0].city;
        const stateresponse = response.data.results[zipCode][0].state;
        setCity(cityresponse);
        setState(stateresponse);
      })
      .catch(error => {
        console.log("There was a problem finding home: ", error);
      });
  }, [location, apikey]);

  // user info from faker
  const sex = faker.person.sex();
  const firstName = faker.person.firstName(sex);
  const lastName = faker.person.lastName();
  const jobTitle = faker.person.jobTitle();
  const bio = faker.person.bio();
  const music = faker.music.genre();

  return (
    <div id="User">
      <div>{firstName} {lastName}</div>
      <div>{sex}</div> 
      <div>{city}, {state}</div>
      <div>{jobTitle}</div>
      <div>
        <div>Bio:</div>
        <div>{bio}</div>
      </div>
      <div>Music: {music}</div> 
    </div>
  );
}

export default CreateUser;
