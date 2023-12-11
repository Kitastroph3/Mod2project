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
          <select className="resourceBox" value={selectedResource} onChange={ handleChange}>
            <option className="selection" value="">Resources</option>
            <option className="selection" value="https://www.thecolorapi.com/docs">Color API</option>
            <option className="selection" value="https://zipcodebase.com/">Zip Code API</option>
            <option className="selection" value="https://randomuser.me/">Random User API</option>
            <option className="selection" value="https://www.remove.bg/">Background Remover</option>
            <option className="selection" value="https://faker.readthedocs.io/en/master/#">Faker</option>
            <option className="selection" value="https://perchance.org/ai-photo-generator">Perchance</option>
            <option className="selection" value="https://www.justinmind.com/blog/awesome-lorem-ipsum-alternatives/">Lorem alts</option>
          </select>
        </div>
        </nav>
    </header>
  )
}

export default TopNav;