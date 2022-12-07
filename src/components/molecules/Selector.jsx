import React, { useState } from 'react'
import useEqual from '../../hooks/useEqual'
import { Figure, Input } from '../atoms'

const Selector = ({ shape, shapeSize, shapeColor, setEqual, equal }) => {
  const [size, setSize] = useState(shapeSize)
  const [color, setColor] = useState(shapeColor)

  useEqual(setEqual, equal, shape, size, color)

  return (
    <div style={{ marginBottom: '50px' }}>
      <Input type='number' value={size} setValue={setSize}>
        {shape} Size
      </Input>
      <Input type='color' setValue={setColor} value={color}>
        {shape} Color
      </Input>
      <Figure shape={shape} shapeSize={size} shapeColor={color} />
    </div>
  )
}

export default Selector
