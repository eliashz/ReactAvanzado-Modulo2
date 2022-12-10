import React, { useState } from 'react'
import { Triangle, Circle, Square, Input, Label, Text } from '../atoms/'

const TriangleSelector = () => {
  const [triangle, setTriangle] = useState(['99', '#FF0000'])
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Label>
        Triangle Size
        <Input
          type='number'
          style={{ width: '50px' }}
          min='1'
          setValue={setTriangle}
          valueArr={triangle}
          value={triangle[0]}
          index={0}
        ></Input>
      </Label>
      <Label>
        Triangle Color
        <Input type='color' setValue={setTriangle} valueArr={triangle} value={triangle[1]} index={1}></Input>
      </Label>
      <Triangle size={triangle[0]} color={triangle[1]} />
    </div>
  )
}

export default TriangleSelector
