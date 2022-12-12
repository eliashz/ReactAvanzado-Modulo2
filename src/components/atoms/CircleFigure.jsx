import React from 'react'
import PropTypes from 'prop-types'

const CircleFigure = ({ size, color }) => {
  if (!size || size <= 0) size = '1'
  return (
    <svg height={size} width={size} style={{ marginBottom: '50px' }}>
      <circle cx={size / 2} cy={size / 2} r={size / 2} fill={color} />
    </svg>
  )
}

CircleFigure.propTypes = {
  size: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
}

export default CircleFigure
