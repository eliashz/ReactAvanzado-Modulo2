import React, { useEffect } from 'react'
import { useState } from "react"
import Figure from "./Figure"

const Selector = ({ shape, shapeSize, shapeColor, setEqual, equal }) => {
  const [size, setSize] = useState(shapeSize)
  const [color, setColor] = useState(shapeColor)
  console.log(shapeSize);
  useEffect(() => {
    equal[shape].size = shapeSize
    equal[shape].color = shapeColor
    console.log(equal);

  }, [shapeSize, shapeColor])

  return (
    <div style={{marginBottom: '50px'}}>
        <div>
            {shape} Size <input type="number" style={{width: "50px"}} min='1'  value={size} onChange={e => setSize(e.target.value)}/>
        </div>
        <div>
            {shape} Color <input type="color" value={color} onChange={e => setColor(e.target.value)}/>
        </div>
        <Figure shape={shape} shapeSize={size} shapeColor={color} />
    </div>
  )
}

export default Selector
