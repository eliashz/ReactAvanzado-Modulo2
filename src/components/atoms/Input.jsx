import React from 'react'
import PropTypes from 'prop-types'
import { onChangeHandler } from '../../helpers'

const Input = ({ type, style, min, setValue, valueArr, value, index }) => {
  return (
    <input
      type={type}
      style={style}
      min={min}
      value={value}
      onChange={e => onChangeHandler(e, setValue, valueArr, index)}
    />
  )
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  style: PropTypes.object,
  min: PropTypes.string,
  setValue: PropTypes.func.isRequired,
  valueArr: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
}

export default Input
