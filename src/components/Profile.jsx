import React from 'react'

function Profile() {
  
  return (
    <aside id="profile">
      <div id="mugShot"></div>
      <header>Jeremy Bearemy</header>
      <div id="title">Front-End Developer | UI/UX Designer</div>
      <div id="socialLinks"> 
        <ul>
          {/* _blank target means new tab; rel attributes for security purposes prevent opened page from controlling traffic, both attributes do same thing but used together */}
          <a href='https://www.linkedin.com/' target="_blank" rel="noopener noreferrer">Linkedin</a>
          <a href="https://github.com/" target='_blank' rel="noopener noreferrer">Github</a>
          <li>Email</li>
        </ul>
      </div>
      <div id="info">
        <p>Humblebrag sustainable tofu, shoreditch selfies edison bulb scenester neutral milk hotel hella brunch schlitz fixie. Listicle whatever authentic flexitarian, semiotics cliche chartreuse leggings hella fingerstache squid live-edge vexillologist. Vinyl fixie palo santo, chambray direct trade thundercats craft beer. Taxidermy marxism poutine retro affogato, tofu yuccie leggings VHS big mood wayfarers kale chips cronut gentrify tonx. Fanny pack yuccie locavore literally, iceland letterpress tote bag next level tousled big mood. Lo-fi af sriracha, mixtape hexagon crucifix sus fingerstache. Brought to you by: Hipster Ipsum</p>
      </div>
      <button id= "printResume">
        Print Resume
      </button>
    </aside>
  )
}

export default Profile