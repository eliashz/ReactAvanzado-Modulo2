import React from 'react'
import PropTypes from 'prop-types'

const Square = ({ figureSize, figureColor }) => {
  return (
    <svg width='200' height='200'>
      <rect width='200' height='200' fill='blue' />
    </svg>
  )
}

Square.propTypes = {
  figureSize: PropTypes.string.isRequired,
  figureColor: PropTypes.string.isRequired,
}

export default Square
