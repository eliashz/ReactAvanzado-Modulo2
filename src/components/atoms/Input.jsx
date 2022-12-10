import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ type, style, min, setValue, valueArr, value, index }) => {
  const onChangeHandler = e => {
    const newArr = [...valueArr]
    newArr[index] = e.target.value
    setValue(newArr)
  }
  return <input type={type} style={style} min={min} value={value} onChange={onChangeHandler} />
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
