import React, { useDebugValue, useState } from 'react'
import { Input, Label } from '../atoms'
import PropTypes from 'prop-types'

const Selector = ({ children, setValue, value }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Label>
        {children} Size
        <Input
          type='number'
          style={{ width: '50px' }}
          min='1'
          setValue={setValue}
          valueArr={value}
          value={value[0]}
          index={0}
        ></Input>
      </Label>
      <Label>
        {children} Color
        <Input type='color' setValue={setValue} valueArr={value} value={value[1]} index={1}></Input>
      </Label>
    </div>
  )
}

Selector.propTypes = {
  children: PropTypes.node.isRequired,
  setValue: PropTypes.func.isRequired,
  value: PropTypes.array.isRequired,
}

export default Selector
