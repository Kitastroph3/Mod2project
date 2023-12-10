import { useState} from 'react';
import { Link } from 'react-router-dom';

function TopNav() {

  const [selectedResource, setSelectedResource] = useState('');

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedResource(selectedValue);

    if (selectedValue) {
      window.open(selectedValue, '_blank');
    }
  };

  return (
    <header>
      <Link to ="/">
          <div id="title"><h2>Quick Lazy Fox</h2></div>
      </Link>
      <nav id="navcontainer">
        <Link to ="/">
            <div className='page'>About </div>  
        </Link>
        
        <Link to ="/users">
          <div className='page'>Users</div>
        </Link>
           
        <Link to ="/colors">
          <div className='page'>Colors</div>
        </Link>

        <div id="resources">
          <select value={selectedResource} onChange={ handleChange}>
            <option value="">Resources</option>
            <option value="https://www.thecolorapi.com/docs">Color API</option>
            <option value="https://zipcodebase.com/">Zip Code API</option>
            <option value="https://randomuser.me/">Random User API</option>
            <option value="https://www.remove.bg/">Background Remover</option>
            <option value="https://faker.readthedocs.io/en/master/#">Faker</option>
            <option value="https://perchance.org/ai-photo-generator">Perchance</option>
            <option value="https://www.justinmind.com/blog/awesome-lorem-ipsum-alternatives/">Lorem alts</option>
          </select>
        </div>
        </nav>
    </header>
  )
}

export default TopNav;