import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { faker } from '@faker-js/faker';
// import dudePicsArray from '../models/dudePicsArray';
// import femalePicsArray from '../models/femalePicsArray;'


const CreateUser = () => {
  const [personas, setPersonas] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  //=========================================APIS!!!!!======
  //creat random date of birth to attach to user
  const getDOB = async () => {
    try {
      const response = await axios.get('https://randomuser.me/api/?inc=dob&results=1');
      const birthday = response.data.results[0].dob.date.substring(0, 10);
      const age = response.data.results[0].dob.age;
      return { birthday, age };
    } catch (error) {
      console.log("Could not read Driver's License ", error);
      return null;
    }
  };

  //create randomized location to attach to user
  const getLocation = async () => {
    const zipCode = faker.location.zipCode('#####');
    const apikey = "27738e80-9554-11ee-82ee-999cd3256f0f";
    console.log(zipCode)
    try {
      const response = await axios.get(`https://app.zipcodebase.com/api/v1/search?apikey=${apikey}&codes=${zipCode}&country=us`);
      const city = response.data.results[zipCode][0].city;
      const state = response.data.results[zipCode][0].state;
      return { city, state };
    } catch (error) {
      console.log("Couldn't read the US passport. Trying again.");
      try {
        const response = await axios.get(`https://app.zipcodebase.com/api/v1/search?apikey=${apikey}&codes=${zipCode}`);
        const city = response.data.results[zipCode][0].city;
        const state = response.data.results[zipCode][0].state;
        return { city, state };
      } catch (error) {
        console.log("Sorry, my compass is broken.");
        return null;
      }
    }
  };

  //=====================================Logic to make a Persona
  //create persona once api calls are successful
  const makePersona = async () => {
    const dob = await getDOB();
    const location = await getLocation();
    
    if (dob && location) {
      const sex = faker.person.sex();
      const firstName = faker.person.firstName(sex);
      const lastName = faker.person.lastName();
      const jobTitle = faker.person.jobTitle();
      const bio = faker.person.bio();
      const music = faker.music.genre();
      const firstLetter = bio.charAt(0);
      const bioRest = bio.substring(1);
      const biography = firstLetter.toUpperCase() + bioRest;

      const newPersona = {
        firstName,
        lastName,
        jobTitle,
        location: { city: location.city, state: location.state },
        dob: { birthday: dob.birthday, age: dob.age },
        bio: biography,
        music,
      };

      setPersonas([...personas, newPersona]);
    }
  };
  
  //=============================================Load Persona
  //call the makepersona function to run one the componenet loads
  useEffect(() => {
    makePersona();
  }, []);

  //================================================buttons
  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  //create a new persona and then add it to the makepersona array
  const handleNext = () => {
    if (currentIndex < personas.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      makePersona();
      setCurrentIndex(currentIndex + 1);
    }
  };

  //================================Array of generate Personas
  const currentPersona = personas[currentIndex];

  //================================

  return (
    <div className="User">
    {/* will not work unless compoenent is wrapped. Checks for "truthy value" */}
      {currentPersona && (
        <div className='bg'>
          <div className="userName">{currentPersona.firstName} {currentPersona.lastName}</div>
          <div className='userInfo'>Age: {currentPersona.dob.age}</div>
          <div className='userInfo'>Birthday: {currentPersona.dob.birthday}</div>
          <div className='userInfo'>Location: {currentPersona.location.city}, {currentPersona.location.state}</div>
          <div className='userInfo'>Job: {currentPersona.jobTitle}</div>
          <div className='userInfo'>Bio: {currentPersona.bio}</div>
          <div className='userInfo'>Likes: {currentPersona.music}</div>
        </div>
      )}

      <div id="userButtons">
        <button className='peepbtns' id="btnback" onClick={handlePrevious}>Previous</button>
        <button className='peepbtns' id="newbtn" onClick={handleNext}>Create</button>
      </div>
    </div>
  );
};

export default CreateUser;