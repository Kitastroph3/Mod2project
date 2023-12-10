import React from 'react'
import QuickLazyFox from '../downloads/QuickLazyFox.png'
import Article from '../components/Article'
  
const About = () => {
  return (
    <section id="Home">
      <img id="titleblock" src={QuickLazyFox} alt="Quick Lazy Fox"/>
      <div>A resource for jumpstarting user research and front end design</div>  
      <Article />
      <Article />
    </section>
  )
}

export default About