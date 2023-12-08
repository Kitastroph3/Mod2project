import axios from 'axios';
import { useEffect, useState } from 'react';

const DobAPI = () => {
  // const location = '08828'
    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');
    const [day, setDay] = useState('');
    const [age, setAge] = useState('');
  // location api from metadapi.com
  useEffect(() => {
    axios.get(`https://randomuser.me/api/?inc=dob`)
      .then(response => {
        console.log(response.data.results[0].dob)
          const birthday = response.data.results[0].dob.date
          const date = birthday.substr(8, 2)
          const monthy = birthday.substr(5, 2)
          const yeary = birthday.substr(0, 4)
          setYear(yeary);  
          setMonth(monthy);
          setDay(date);
          setAge(response.data.results[0].dob.age);
      })
      .catch(error => {
        console.log("Error reading driver's license ", error);
      });
  }, []);

  return (
        <div>
          <div>{age}</div>
          <div>{month}-{day}-{year}</div>
        </div>
  )
}
export default DobAPI;