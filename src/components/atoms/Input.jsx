import React from 'react'
import PropTypes from 'prop-types'
import onChangeHandler from '../../helpers/onChangeHandler'

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
  min: PropTypes.string,
  style: PropTypes.object,
  value: PropTypes.string.isRequired,
  valueArr: PropTypes.array.isRequired,
  setValue: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
}

export default Input
