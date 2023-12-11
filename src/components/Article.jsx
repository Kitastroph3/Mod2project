import React from 'react'

const article = (props) => {
  return (
    <div className='article'>
      <div>
        <h1>{props.name}</h1>
        <p>{props.info}</p>
      </div>
      <div>
        {props.image}
      </div>
    </div>
  )
}

export default article