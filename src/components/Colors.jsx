import React, { useState } from 'react';
import axios from 'axios';

const Colors = () => {
  //variables for api call
  const [hexColor, setHexColor] = useState('');
  const [modeScheme, setModeScheme] = useState('analogic');//default set 
  
  //api response
  const [color1, setColor1] = useState('');
  const [color2, setColor2] = useState('');
  const [color3, setColor3] = useState('');
  const [color4, setColor4] = useState('');

  const fetchScheme = () => {
    // useEffect(() => {
      //require two parametes to make call
    if (hexColor && modeScheme) {
      axios.get(`https://www.thecolorapi.com/scheme?hex=${hexColor}&format=json&mode=${modeScheme}&count=4`)
        .then(response => {
          console.log(response.data);
          // hold color data from response array so colors can be assigned
          const colors = response.data.colors.map(color => color.hex.value)
          setColor1(colors[0]);
          setColor2(colors[1]);
          setColor3(colors[2]);
          setColor4(colors[3]);
          // save each color value to variable?
        })
        .catch(error => {
          console.log("The color palette's mixed up: ", error);
        });
    } else { 
      <div>Please enter a hex color</div>
    }
  }

  // must be two different events
  const handleHexChange = (event) => {
    setHexColor(event.target.value);
  };

  const handleModeChange = (event) => {
    setModeScheme(event.target.value);
  };

  const handleClick = () => { 
    fetchScheme()
  }

  const invert = (event) => {
    if (event.currentTarget.style.filter) {
      event.currentTarget.style.filter = null
    } else {
      event.currentTarget.style.filter = "invert(100%)"
    }
  }
    
  const modeOptions = [
    { key: "analogic", value: "Analogic" },
    { key: "analogic-complement", value: "Analogic Complement" },
    { key: "complement", value: "Complement" },
    { key: "monochrome", value: "Monochrome" },
    { key: "monochrome-dark", value: "Monochrome Dark" },
    { key: "monochrome-light", value: "Monochrome Light" },
    { key: "triad", value: "Triad" },
    { key: "quad", value: "Quad" }
  ]

  return (
    <div id ="colorPicker">
      <div id="apiInputs">
        {/* 1A */}
        <div className='colorGrid'>
          <div>Choose a color scheme:</div>
          <select id="modeSelect" value={modeScheme} onChange={handleModeChange}>
          {modeOptions.map((mode, index) => (
            <option key={index} value={mode.key}>{mode.value}</option>))}
        </select>
        </div>

        {/* 1B */}
        <div className='colorGrid'>
          <div>Type a hex color value: </div>
          <input id="hexColor" value={hexColor} placeholder="ex: 'CCCC33'" onChange={handleHexChange} style={{ backgroundColor: "#" + hexColor }}/>
        </div>
        
        {/* 2 button to run modescheme and hexcolor functions*/}
        <div className='colorGrid'>
          <div>Find your matches:</div>
          <button id="colorBtn" onClick={handleClick}>Make Palette</button>
        </div>  
        
      </div>
      
      <div id="colorOutput">
        {/* 3 Output */}
        <div id="layout">
          <div id="one">
            <div className="color" style={{ backgroundColor: color1}}>
              <div className='iconfill' onClick={invert}></div>
            </div>
            <div className='colorValue'>{ color1 }</div>
          </div>
          <div id="two">
            <div className="color" style={{ backgroundColor: color2 }}>
              <div className='iconfill' onClick={invert}></div>
            </div>
            <div className='colorValue'>{ color2 }</div>
          </div>
          <div>
            <div className="color" style={{ backgroundColor: color3 }}>
              <div className='iconfill' onClick={invert}></div>
            </div>
            <div className='colorValue'>{ color3 }</div>
          </div>
          <div>
            <div className="color" style={{ backgroundColor: color4 }}>
              <div className='iconfill' onClick={invert}></div>
            </div>
            <div className='colorValue'>{ color4 }</div>
          </div>
        </div>
      </div>
    </div>
  );
}
  export default Colors;