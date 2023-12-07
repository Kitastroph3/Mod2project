import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Colors = () => {
  //variables for api call
  const [hexColor, setHexColor] = useState('');
  const [modeScheme, setModeScheme] = useState('');
  //api response
  
  const [color1, setColor1] = useState('');
  const [color2, setColor2] = useState('');
  const [color3, setColor3] = useState('');
  const [color4, setColor4] = useState('');

  useEffect(() => {
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
          console.error("The color palette's mixed up: ", error);
        });
    }
  }, [hexColor, modeScheme]);

  // must be two different events
  const handleHexChange = (event) => {
    setHexColor(event.target.value);
  };

  const handleModeChange = (event) => {
    setModeScheme(event.target.value);
  };
    
  const modeOptions = [
    { key: "monochrome", value: "Monochrome" },
    { key: "monochrome-dark", value: "Monochrome Dark" },
    { key: "monochrome-light", value: "Monochrome Light" },
    { key: "analogic", value: "Analogic" },
    { key: "complement", value: "Complement" },
    { key: "analogic-complement", value: "Analogic Complement" },
    { key: "triad", value: "Triad" },
    { key: "quad", value: "Quad" }
  ]

  return (
    <div>
      <div>
        <select value={modeScheme} onChange={handleModeChange}>
          {modeOptions.map((mode, index) => (
            <option key={index} value={mode.key}>{mode.value}</option>))}
        </select>
          
        <input id="hexColor" value={hexColor} placeholder="Enter Hex Color ex(084890)" onChange={handleHexChange} />
      </div>

      <div>
        <p>Colors:</p>
        <div id="color1">{color1}</div>
        <div id="color2">{color2}</div>
        <div id="color3">{color3}</div>
        <div id="color4">{color4}</div>
      </div>
    </div>
  );
}
  export default Colors;