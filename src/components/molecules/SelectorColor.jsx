import React from 'react'
import { InputColor, Label } from '../atoms'
import PropTypes from 'prop-types'

const SelectorColor = ({ children, setValue, value, onChange }) => {
  return (
    <div>
      <Label id='color'>{children} Color</Label>
      <InputColor
        id='color'
        name='colorSelector'
        type='color'
        setValue={setValue}
        value={value}
        onChange={onChange}
      ></InputColor>
    </div>
  )
}

SelectorColor.propTypes = {
  children: PropTypes.node.isRequired,
  setValue: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default SelectorColor
