import React from 'react'
import PropTypes from 'prop-types'

const TriangleFigure = ({ size, color }) => {
  return (
    <svg height={size} width={size} style={{ marginBottom: '50px' }}>
      <path d={`M${size / 2} 0 L0 ${size} L${size} ${size} Z`} fill={color} />
    </svg>
  )
}

TriangleFigure.propTypes = {
  size: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
}

export default TriangleFigure
