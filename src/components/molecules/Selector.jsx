import React, { useState } from 'react'
import useEqual from '../../hooks/useEqual'
import { Figure, Input } from '../atoms'
import PropTypes from 'prop-types'

const Selector = ({ shape, shapeSize, shapeColor, setFigures, figures }) => {
  const [size, setSize] = useState(shapeSize)
  const [color, setColor] = useState(shapeColor)

  useEqual(setFigures, figures, shape, size, color)
  console.log('1')

  return (
    <div style={{ marginBottom: '50px' }}>
      <Input type='number' style={{ width: '50px' }} min='1' value={size} setValue={setSize}>
        {shape} Size
      </Input>
      <Input type='color' setValue={setColor} value={color}>
        {shape} Color
      </Input>
      <Figure shape={shape} shapeSize={size} shapeColor={color} />
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
