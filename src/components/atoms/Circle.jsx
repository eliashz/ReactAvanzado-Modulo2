import React from 'react'
import PropTypes from 'prop-types'

const Circle = ({ figureSize, figureColor }) => {
  return (
    <svg height='200' width='200'>
      <circle cx='100' cy='100' r='100' fill='green' />
    </svg>
  )
}

Circle.propTypes = {
  figureSize: PropTypes.string.isRequired,
  figureColor: PropTypes.string.isRequired,
}

export default Circle
