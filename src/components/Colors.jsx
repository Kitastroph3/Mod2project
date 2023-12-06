import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Colors = () => {
    const [colorScheme, setColorScheme] = useState(null);
    const [hexColor, setHexColor] = useState('');
    const [modeChoice, setModeChoice] = useState('analogic');

    useEffect(() => {
        if (hexColor && mode) {
            axios.get(`https://www.thecolorapi.com/scheme?hex=${hexColor}&format=json&mode=${mode}&count=4`)
            .then(response => {
            setColorScheme(response.data);
            })
            .catch(error => {
            console.error('My palette got mixed up:', error);
            });
        }
    }, [hexColor, mode]);

    const handleChange = (event) => {
        setHexColor(event.target.value);
    };

    const handleModeChange = (event) => { 
        setModeChoice (event.target.value)
    }

  return (
    <div>
        <h1>Color Scheme</h1>
        <input 
            id="hexColor" 
            value={hexColor} 
            onChange={handleChange} 
            placeholder="Enter Hex Color Code"
        />
        
          <select id="modeDropdown" value={mode} onChange={handleModeChange}>
              {/* <option value="analogic">{mode}</> */}
          </select>
            
          <div>
            <p>Colors:</p>
            <ul>
                {colorScheme.colors.map((color, index) => (
                <li key={index}>{color.hex.value}</li>
                ))}
            </ul>
            </div>
        
        </div>
    );
    };

export default Colors;