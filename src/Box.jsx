import React, { useState } from "react";
import "./Box.css"

export default function Box ( {colors} ) {
    
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const [color, setColor] = useState(randomColor);

    const changeColor = () => {
        const newColor = colors[Math.floor(Math.random() * colors.length)];
        setColor(newColor)
    }
    return (
        <div className="box" style={{backgroundColor: color}} onClick={changeColor}>

        </div>
    )
}