import React from 'react'
import PropTypes from 'prop-types'

const SquareFigure = ({ size, color }) => {
  if (!size || size <= 0) size = '1'
  return (
    <svg width={size} height={size}>
      <rect width={size} height={size} fill={color} />
    </svg>
  )
}

SquareFigure.propTypes = {
  size: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
}

export default SquareFigure
