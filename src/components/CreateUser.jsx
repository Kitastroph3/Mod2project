import { faker } from '@faker-js/faker';
import axios from 'axios';
import { useEffect, useState } from 'react';

function CreateUser() {
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  // user info from faker
  const sex = faker.person.sex();
  const firstName = faker.person.firstName(sex);
  const lastName = faker.person.lastName();
  const jobTitle = faker.person.jobTitle();
  const bio = faker.person.bio();
  const music = faker.music.genre();
  // const location = faker.location.zipCode('#####');
  const location = '08828'

  const apikey = "27738e80-9554-11ee-82ee-999cd3256f0f"
  // location api from metadapi.com
  useEffect(() => {
    axios.get(`https://app.zipcodebase.com/api/v1/search?apikey=${apikey}&codes=${location}&country=us`)
      .then(response => {
        const results = response.data.results
        console.log(results)
        const cityresponse = response.data.results[0][0][1];
        const stateresponse = response.data.results[0][0].state;
        console.log(cityresponse);
        console.log(stateresponse);
        setCity(cityresponse);
        setState(stateresponse);
      })
      .catch(error => {
        console.log("There was a problem finding home: ", error);
      });
  }, [location, apikey]);

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
