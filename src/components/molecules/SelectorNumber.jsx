import React from 'react'
import { InputNumber, Label } from '../atoms'
import PropTypes from 'prop-types'

const SelectorNumber = ({ children, setValue, value, onChange }) => {
  return (
    <div>
      <Label id='number'>{children} Size</Label>
      <InputNumber
        id='number'
        name='numberSelector'
        type='number'
        style={{ width: '50px' }}
        min='1'
        setValue={setValue}
        value={value}
        onChange={onChange}
      ></InputNumber>
    </div>
  )
}

SelectorNumber.propTypes = {
  children: PropTypes.node.isRequired,
  setValue: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default SelectorNumber
