import './App.css';
//import react hooks
import { useState, useEffect } from 'react';


// const rgbInput = "rgb(0,71,171)"
// const cmykInput = "cmyk(100,58,0,33)"
// const mode= monochroome, monochrome-dark, monochrome-light, analogic, complement, analgoci-complement, triad quad
// count= number of colors to return
// https://www.thecolorapi.com/docs
// https://www.thecolorapi.com/scheme?hex=0047AB&rgb=0,71,171&hsl=215,100%,34%&cmyk=100,58,0,33&format=json&mode=analogic&count=6
// const URL = ` https://www.thecolorapi.com/scheme?${input}&format=json&mode=${mode}&count=${count}`


function App() {
  const [hexInput, setHexInput] = useState('')
  let urlHexInput = `hex=${setHexInput}`

  const URL = `https://www.thecolorapi.com/scheme?${urlHexInput}&format=json&mode=analogic&count=4`
  
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
      <form>
        <input type="text" value={hexInput} placeholder="Enter Hex Value" onChange={(e) => setHexInput(e.target.value)}/>
        <input type="submit" value="submit" /*onClick={ handleChange}*/></input> 
      </form> 

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


