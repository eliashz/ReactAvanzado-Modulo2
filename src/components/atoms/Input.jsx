import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ children, type, setValue, value, style, min }) => {
  return (
    <div>
      {children}
      <input
        type={type}
        value={value}
        min={min}
        style={style}
        onChange={e => setValue(e.target.value)}
      />
    </div>
  )
}

Input.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
  min: PropTypes.string,
  style: PropTypes.object,
  setValue: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
}

export default Input
