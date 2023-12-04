import './App.css';
//import react hooks
import { useState, useEffect } from 'react';

const hexInput = "hex="+"0047AB"
// const rgbInput = "rgb(0,71,171)"
// const cmykInput = "cmyk(100,58,0,33)"
// const mode= monochroome, monochrome-dark, monochrome-light, analogic, complement, analgoci-complement, triad quad
// count= number of colors to return
// https://www.thecolorapi.com/docs
// https://www.thecolorapi.com/scheme?hex=0047AB&rgb=0,71,171&hsl=215,100%,34%&cmyk=100,58,0,33&format=json&mode=analogic&count=6
// const URL = ` https://www.thecolorapi.com/scheme?${input}&format=json&mode=${mode}&count=${count}`
const URL = `https://www.thecolorapi.com/scheme?${hexInput}&rgb=0,71,171&hsl=215,100%,34%&cmyk=100,58,0,33&format=json&mode=analogic&count=6`

function App() {
  const [hexInput, setHexInput] = useState(0)
  // const [NJhumidity, NJsetHumidity] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(URL);
      result.json().then(json => {  
        setHexInput(json.hex)
        // NJsetHumidity(json.current.humidity)
      })
    }
    fetchData();
  }, []);

  return (
    <div className='App'>
      <header><h1>Color</h1></header>
      <div id="hex">
         <input type="text" placeholder="Enter Hex Value Here" id="hexText"></input><button>Submit</button>
      </div>
      <div id="Return">
        <div id="one">Example</div>
        <div id="two">Example</div>
        <div id="three">Example</div>
        <div id="four">Example</div>
      </div>
      <footer>Mod2 Project- Kit Danovsky</footer>
    </div>
  )
}
  
export default App;
