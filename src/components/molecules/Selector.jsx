import React, { useState } from 'react'
import useEqual from '../../hooks/useEqual'
import { Triangle, Circle, Square, Input, Label } from '../atoms'
import PropTypes from 'prop-types'

const Selector = ({ defaultSize, defaultColor, setFigures, figures }) => {
  const [size, setSize] = useState(defaultSize)
  const [color, setColor] = useState(defaultColor)

  //useEqual(setFigures, figures, shape, size, color)

  return (
    <div style={{ marginBottom: '50px', display: 'flex', flexDirection: 'column' }}>
      <Label>
        Triangle Size
        <Input type='number' style={{ width: '50px' }} min='1' value={size} setValue={setSize}></Input>
      </Label>
      <Label>
        Triangle Color
        <Input type='color' setValue={setColor} value={color}></Input>
      </Label>
      <Triangle size={size} color={color} />
      <Circle size={size} color={color} />
      <Square size={size} color={color} />
    </div>
  )
}

Selector.propTypes = {
  defaultSize: PropTypes.string.isRequired,
  defaultColor: PropTypes.string.isRequired,
  setFigures: PropTypes.func,
  figures: PropTypes.object,
}

export default Selector
