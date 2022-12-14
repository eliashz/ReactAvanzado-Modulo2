import React from 'react'
import PropTypes from 'prop-types'

const InputNumber = ({ id, name, type, style, min, value, onChange }) => {
  return <input id={id} name={name} type={type} style={style} min={min} value={value} onChange={onChange} />
}

InputNumber.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  style: PropTypes.object,
  min: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func,
}

export default InputNumber
