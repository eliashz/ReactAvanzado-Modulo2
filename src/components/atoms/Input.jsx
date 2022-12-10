import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ type, style, min, setValue, value, index }) => {
  const onChangeHandler = e => {
    const arr = [...value]
    arr[index] = e.target.value
    setValue(arr)
  }
  return <input type={type} style={style} min={min} value={value} onChange={onChangeHandler} />
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  min: PropTypes.string,
  style: PropTypes.object,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
}

export default Input
