import React from 'react'
import PropTypes from 'prop-types'

const Triangle = ({ size, color }) => {
  return (
    <svg height={size} width={size} style={{ marginBottom: '50px' }}>
      <path d={`M${size / 2} 0 L0 ${size} L${size} ${size} Z`} fill={color} />
    </svg>
  )
}

Triangle.propTypes = {
  size: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
}

export default Triangle
