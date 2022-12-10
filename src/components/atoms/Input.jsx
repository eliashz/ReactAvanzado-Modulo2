import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ type, style, min, setValue, value }) => {
  return <input type={type} style={style} min={min} value={value} onChange={e => setValue(e.target.value)} />
}

Input.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
  min: PropTypes.string,
  style: PropTypes.object,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
}

export default Input
