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
  const firstLetter = bio.charAt(0);
  const bioRest = bio.substring(1);
  const biography = firstLetter.toUpperCase() + bioRest

  return (
    <div className="User">
      <div className='bg'>
      <div className="userName">{firstName} {lastName}</div>    
      <div className='userJob'>{jobTitle}</div>
        <DobAPI />
        <ZipCodeAPI />
      <div>Bio: {biography}</div>
      <div>Music: {music}</div> 
    </div>
    </div>
  );
}

export default CreateUser;
