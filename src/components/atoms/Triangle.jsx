import React from 'react'
import PropTypes from 'prop-types'

const Triangle = ({ figureSize, figureColor }) => {
  return (
    <svg height='200' width='200'>
      <path d='M100 0 L0 200 L200 200 Z' fill='red' />
    </svg>
  )
}

Triangle.propTypes = {
  figureSize: PropTypes.string.isRequired,
  figureColor: PropTypes.string.isRequired,
}

export default Triangle
