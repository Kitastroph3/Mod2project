import { faker } from '@faker-js/faker';
import React from 'react';
//installed as extension, no json link, but I needed something else to make this an actual project
function CreateUser() {
    const sex = faker.person.gender();
    const firstName = faker.person.firstName(sex);
    const lastName = faker.person.lastName();
    const birthdate = faker.date.birthdate();
    const jobTitle = faker.person.jobTitle();
    const bio = faker.person.bio();
    const music = faker.music.genre();
    const location = faker.location.zipcode();

  return (
    <div id="User">
      <div>{firstName}</div>
      <div>{lastName}</div>
      <div>{birthdate}</div>
      <div>{sex}</div>
      <div>{location}</div>
      <div>{jobTitle}</div>
      <div>{bio}</div>
      <div>{music}</div>
  </div>
  )
}

export default CreateUser;