import React from 'react'

const article = (props) => {
  return (
    <div className='article' id={props.id}>
      <div className='articleinfowrap'>
        <h1>{props.name}</h1>
        <p>{props.info}</p>
      </div>
      <div className='articleimgwrap'>
        <img className='articleimg'src={props.img} alt={props.imgdesc}></img>
      </div>
    </div>
  )
}

export default article