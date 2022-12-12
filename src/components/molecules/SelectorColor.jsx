import React from 'react'
import { InputColor, Label } from '../atoms'
import PropTypes from 'prop-types'

const SelectorColor = ({ children, setValue, value }) => {
  return (
    <div>
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

SelectorColor.propTypes = {
  children: PropTypes.node.isRequired,
  setValue: PropTypes.func.isRequired,
  value: PropTypes.array.isRequired,
}

export default SelectorColor
