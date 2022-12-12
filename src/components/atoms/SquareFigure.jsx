import React from 'react'
import PropTypes from 'prop-types'

const Square = ({ size, color }) => {
  return (
    <svg width={size} height={size}>
      <rect width={size} height={size} fill={color} />
    </svg>
  )
}

Square.propTypes = {
  size: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
}

export default Square
