import React from 'react';
import { Link } from 'react-router-dom';


function TopNav () {
  return (
    <header>
      <div id="title"><h2>Quick Lazy Fox</h2></div>
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
        </nav>
    </header>
  )
}

export default TopNav;