import React from 'react'
import PropTypes from 'prop-types'

const Circle = ({ size, color }) => {
  return (
    <svg height={size} width={size} style={{ marginBottom: '50px' }}>
      <circle cx={size / 2} cy={size / 2} r={size / 2} fill={color} />
    </svg>
  )
}

Circle.propTypes = {
  size: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
}

export default Circle
