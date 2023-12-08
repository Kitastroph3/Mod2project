import React from 'react';
import { Link } from 'react-router-dom';

function TopNav () {
  return (
    <nav>
      <div id="navcontainer">
        <Link to ="/">
          <div className='page'>About</div>
        </Link>

        <Link to ="/users">
          <div className='page'>Users</div>
        </Link>

        <Link to ="/colors">
          <div className='page'>Colors</div>
        </Link>
      </div>
    </nav>
  )
}

export default TopNav;