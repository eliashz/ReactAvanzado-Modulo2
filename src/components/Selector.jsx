import React, { useEffect } from 'react'
import { useState } from "react"
import Figure from "./Figure"

const Selector = ({ shape, shapeSize, shapeColor }) => {
  const [size, setSize] = useState(shapeSize)
  const [color, setColor] = useState(shapeColor)
  const [equal, setEqual] = useState({ 
    Triangle: {size: '100', color: '#FF0000'},
    Circle: {size: '150', color: '#00FF00'},
    Square: {size: '200', color: '#0000FF'}
  });

  return (
    <div style={{marginBottom: '50px'}}>
        <div>
            {shape} Size <input type="number" style={{width: "50px"}} min='1'  value={size} onChange={e => setSize(e.target.value)}/>
        </div>
        <div>
            {shape} Color <input type="color" value={color} onChange={e => setColor(e.target.value)}/>
        </div>
        <Figure shape={shape} shapeSize={size} shapeColor={color} setEqual={setEqual} equal={equal} />
    </div>
  )
}

export default Selector
