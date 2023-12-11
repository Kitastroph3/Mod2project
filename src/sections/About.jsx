import React from 'react'
import QuickLazyFox from '../downloads/QuickLazyFox.png'
import Article from '../components/Article'
  
const About = () => {


  return (
    <section id="Home">
      <img id="titleblock" src={QuickLazyFox} alt="Quick Lazy Fox"/>
      <div id="tag">Resources for User Interfacing</div>
      <div id="aboutArticles">
      <Article
        name="Hipster Ipsum"
        info="Selvage dreamcatcher tonx gatekeep you probably haven't heard of them. Put a bird on it kitsch mukbang kombucha, cold-pressed gorpcore +1 VHS wayfarers selvage disrupt blackbird spyplane. Glossier cloud bread direct trade church-key, thundercats shabby chic jean shorts seitan organic kale chips copper mug street art swag butcher keytar. Bruh jean shorts meditation literally cred cardigan chambray meggings. Pok pok listicle ugh tonx snackwave skateboard everyday carry semiotics lyft kombucha big mood wayfarers portland."
        img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.vexels.com%2Fmedia%2Fusers%2F3%2F145720%2Fisolated%2Fpreview%2F3c1cc1841b5c7dfb6a9da4ee9ea25a24-hipster-style-logo-by-vexels.png&f=1&nofb=1&ipt=b67bf8c2a0d286d4099354a83616260aee1492cf3ba01afd78e9ec0e15115036&ipo=images"
        imgdesc="hipster"
        id="alt"  
        />
      <Article
        name="Nietsche Ipsum"
        info="Insofar joy victorious moral ultimate pinnacle against. Derive law convictions deceptions convictions war christian right reason overcome disgust justice. Joy spirit pious war christian convictions chaos zarathustra decrepit. Battle intentions chaos chaos burying battle faithful disgust faithful disgust ultimate. Abstract reason inexpedient prejudice will philosophy revaluation battle decrepit reason christianity evil justice self. Disgust ascetic ascetic contradict passion fearful virtues passion selfish deceptions selfish. Of intentions eternal-return strong inexpedient. Chaos value transvaluation contradict ocean. Sexuality of revaluation good justice enlightenment noble society battle dead love eternal-return chaos endless."
        img="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.fineartamerica.com%2Fimages%2Fartworkimages%2Fmedium%2F3%2Ffriedrich-nietzsche-portrait-vector-drawing-jones-turner-transparent.png&f=1&nofb=1&ipt=03d0d153f0b581b50d03f9dad1bf662e787fb315d6d824512aa5459bd4ef3cde&ipo=images"
        imgdesc="nietzsche"
        />
      </div>
    </section>
  )
}

export default About