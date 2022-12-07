import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ children, type, setValue, value }) => {
  return (
    <div>
      {children}
      <input
        type={type}
        value={value}
        min='1'
        style={{ width: '50px' }}
        onChange={e => setValue(e.target.value)}
      />
    </div>
  )
}

Input.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
}

export default Input
