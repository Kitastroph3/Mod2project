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
        <select value={modeScheme} onChange={handleModeChange}>
          {modeOptions.map((mode, index) => (
            <option key={index} value={mode.key}>{mode.value}</option>))}
        </select>
        
        {/* 1B */}
        <input id="hexColor" value={hexColor} placeholder="Enter Hex Color ex(084890)" onChange={handleHexChange} />
      </div>
        
        {/* 2 button to run modescheme and hexcolor functions*/}
      <button onClick={handleClick}>Get ColorScheme</button>

      <div id="colorOutput">
        {/* 3 Output */}
        <div id="colorD" style={{ backgroundColor: "#" + hexColor }}>{hexColor}</div>
        <div id="color1" style={{ backgroundColor: color1  }}>{color1}</div>
        <div id="color2" style={{ backgroundColor: color2}}>{color2}</div>
        <div id="color3" style={{ backgroundColor: color3}}>{color3}</div>
        <div id="color4" style={{ backgroundColor: color4} }>{color4}</div>
      </div>
    </div>
  );
}
  export default Colors;