import React, { useState } from 'react'
import useEqual from '../hooks/useEqual'
import Figure from './atoms/Figure'

const Selector = ({ shape, shapeSize, shapeColor, setEqual, equal }) => {
  const [size, setSize] = useState(shapeSize)
  const [color, setColor] = useState(shapeColor)

  useEqual(setEqual, equal, shape, size, color)

  return (
    <div style={{ marginBottom: '50px' }}>
      <div>
        {shape} Size{' '}
        <input
          type='number'
          style={{ width: '50px' }}
          min='1'
          value={size}
          onChange={e => setSize(e.target.value)}
        />
      </div>
      <div>
        {shape} Color <input type='color' value={color} onChange={e => setColor(e.target.value)} />
      </div>
      <Figure shape={shape} shapeSize={size} shapeColor={color} />
    </div>
  )
}

export default Selector
