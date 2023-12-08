import { faker } from '@faker-js/faker';
import ZipCodeAPI from './ZipcodeAPI';
import DobAPI from './DobAPI';

const CreateUser = () => {
  // user info from faker
  const sex = faker.person.sex();
  const firstName = faker.person.firstName(sex);
  const lastName = faker.person.lastName();
  const jobTitle = faker.person.jobTitle();
  const bio = faker.person.bio();
  const music = faker.music.genre();
  // const adjective = faker.word.adjective();

  return (
    <div id="User">
      <div>{firstName} {lastName}</div>
      <div>{sex}</div>
      <DobAPI />
      <ZipCodeAPI />
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
