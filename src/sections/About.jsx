import React from 'react'
import QuickLazyFox from '../downloads/QuickLazyFox.png'
import Article from '../components/Article'
  
const About = () => {
  return (
    <section id="Home">
      <img id="titleblock" src={QuickLazyFox} alt="Quick Lazy Fox"/>
      <div>A resource for jumpstarting user research and front end design</div> 
      <div id="aboutArticles">
      <Article
        name="Hipster Ipsum"
        info="Selvage dreamcatcher tonx gatekeep you probably haven't heard of them. Put a bird on it kitsch mukbang kombucha, cold-pressed gorpcore +1 VHS wayfarers selvage disrupt blackbird spyplane. Glossier cloud bread direct trade church-key, thundercats shabby chic jean shorts seitan organic kale chips copper mug street art swag butcher keytar. Bruh jean shorts meditation literally cred cardigan chambray meggings. Pok pok listicle ugh tonx snackwave skateboard everyday carry semiotics lyft kombucha big mood wayfarers portland."
      />
      <Article
        name="Nietsche Ipsum"
        info="Insofar joy victorious moral ultimate pinnacle against. Derive law convictions deceptions convictions war christian right reason overcome disgust justice. Joy spirit pious war christian convictions chaos zarathustra decrepit. Battle intentions chaos chaos burying battle faithful disgust faithful disgust ultimate. Abstract reason inexpedient prejudice will philosophy revaluation battle decrepit reason christianity evil justice self. Disgust ascetic ascetic contradict passion fearful virtues passion selfish deceptions selfish. Of intentions eternal-return strong inexpedient. Chaos value transvaluation contradict ocean. Sexuality of revaluation good justice enlightenment noble society battle dead love eternal-return chaos endless."
        />
      </div>
    </section>
  )
}

export default About