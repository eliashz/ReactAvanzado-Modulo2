import React from 'react'
import PropTypes from 'prop-types'

const InputColor = ({ id, name, type, value, onChange }) => {
  return <input id={id} name={name} type={type} value={value} onChange={onChange} />
}

InputColor.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default InputColor
