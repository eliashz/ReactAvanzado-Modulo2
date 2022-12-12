import React from 'react'
import PropTypes from 'prop-types'
import { onChangeHandler } from '../../helpers'

const Input = ({ id, name, type, setValue, valueArr, value, index }) => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={e => onChangeHandler(e, setValue, valueArr, index)}
    />
  )
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  valueArr: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
}

export default Input
