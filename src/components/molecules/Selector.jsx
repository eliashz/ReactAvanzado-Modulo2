import React, { useState } from 'react'
import useEqual from '../../hooks/useEqual'
import { Triangle, Circle, Square, Input, Label } from '../atoms'
import PropTypes from 'prop-types'

const Selector = ({ shape, shapeSize, shapeColor, setFigures, figures }) => {
  const [size, setSize] = useState(shapeSize)
  const [color, setColor] = useState(shapeColor)

  useEqual(setFigures, figures, shape, size, color)

  return (
    <div style={{ marginBottom: '50px', display: 'flex', flexDirection: 'column' }}>
      <Label>
        {shape} Size
        <Input type='number' style={{ width: '50px' }} min='1' value={size} setValue={setSize}></Input>
      </Label>
      <Label>
        {shape} Color
        <Input type='color' setValue={setColor} value={color}></Input>
      </Label>
      <Square shape={shape} shapeSize={size} shapeColor={color} />
      <Circle shape={shape} shapeSize={size} shapeColor={color} />
    </div>
  )
}

Selector.propTypes = {
  shape: PropTypes.string.isRequired,
  shapeSize: PropTypes.string.isRequired,
  shapeColor: PropTypes.string.isRequired,
  setFigures: PropTypes.func,
  figures: PropTypes.object,
}

export default Selector
