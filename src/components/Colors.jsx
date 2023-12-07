import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Colors = () => {
    const [colorScheme, setColorScheme] = useState('');
    const [hexColor, setHexColor] = useState('');
    const [modeScheme, setModeScheme] = useState()
    const modeOptions = [
        { key: "monochrome", value: "Monochrome" },
        { key: "monochrome-dark", value: "Monochrome Dark" },
        { key: "monochrome-light", value: "Monochrome Light"},
        { key: "analogic", value: "Analogic"},
        { key: "complement", value: "Complement" },
        { key: "analogic-complement", value: "Analogic Complement" },
        { key: "triad", value: "Triad" },
        { key: "quad", value: "Quad"}
    ]

  useEffect(() => {
    if (hexColor && modeScheme) {
      axios.get(`https://www.thecolorapi.com/scheme?hex=${hexColor}&format=json&mode=${modeScheme}&count=4`)
        .then(response => {
          setColorScheme(response.data);
        })
        .catch(error => {
          console.error("The color palette's mixed up: ", error);
        });
    }
  }, [hexColor, modeScheme]);

  const handleHexChange = (event) => {
    setHexColor(event.target.value);
    };

   const handleModeChange = (event) => {
       setModeScheme(event.target.value);
  }

    return (
    <div> 
        <select value={modeOptions} onChange={handleModeChange}>
              {modeOptions.map((mode, index) => (
                  <option key={index} value={mode.key}>{mode.value}</option>))}
        </select>
          
        <input 
            id="hexColor" 
            value={hexColor} 
            onChange={handleHexChange} 
            placeholder="Enter Hex Color Code"
        />
            
        {colorScheme ? (
            <div>
            <p>Colors:</p>
            <ul>
                {colorScheme.colors.map((color, index) => (
                <li key={index}>{color.hex.value}</li>
                ))}
            </ul>
            </div>
        ) : (
            <p>Enter a hex color code.</p>
        )}
    </div>
  );
};

export default Colors;