import React from 'react'
import { InputColor, Label } from '../atoms'
import PropTypes from 'prop-types'

const Selector = ({ children, setValue, value }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Label id='color'>{children} Color</Label>
      <InputColor
        id='color'
        name='colorSelector'
        type='color'
        setValue={setValue}
        valueArr={value}
        value={value[1]}
        index={1}
      ></InputColor>
    </div>
  )
}

Selector.propTypes = {
  children: PropTypes.node.isRequired,
  setValue: PropTypes.func.isRequired,
  value: PropTypes.array.isRequired,
}

export default Selector
