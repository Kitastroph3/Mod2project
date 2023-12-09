import { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';
// import ZipCodeAPI from './ZipcodeAPI';
// import DobAPI from './DobAPI';

const CreateUser = () => {
  // create state to holder data of users
  const [personas, setPersonas] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  //create user persona
  const makePersona = () => {
    const sex = faker.person.sex();
    const firstName = faker.person.firstName(sex);
    const lastName = faker.person.lastName();
    const jobTitle = faker.person.jobTitle();
    const music = faker.music.genre();
    ///make bio legible    
        const bio = faker.person.bio();
        const firstLetter = bio.charAt(0);
        const bioRest = bio.substring(1);
    const biography = firstLetter.toUpperCase() + bioRest;

    // const { city, state } = ZipCodeAPI.//logic logic
    // const { birthday, age } = DobAPI.//logic logic

    // make persona
    const newPersona = {
      firstName,
      lastName,
      jobTitle,
      // dob: {birthday, age},
      // location: {city, state},
      bio: biography,
      music,
    };

    setPersonas([...personas, newPersona]);
  };

  useEffect(() => {
    makePersona();
  }, []);


  //maybe I can separate out these button functions?
  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  
  const handleNext = () => {
    if (currentIndex < personas.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      makePersona();
      setCurrentIndex(currentIndex + 1);
    }
  };

  const currentPersona = personas[currentIndex];

  return (
    <div className="User">
      {currentPersona && (
        <div className='bg'>
          <div className="userName">{currentPersona.firstName} {currentPersona.lastName}</div>
          <div className='userJob'>Job: {currentPersona.jobTitle}</div>
          {/* DOB:  {currentPersona.dob.birthday},
          Age: {currentPersona.dob.age}
          Location: {currentPersona.location.city}, {currentPersona.location.state} */}
          <div>Bio: {currentPersona.bio}</div>
          <div>Likes: {currentPersona.music}</div>
        </div>
      )}

      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>

    </div>
  );
}

export default CreateUser;