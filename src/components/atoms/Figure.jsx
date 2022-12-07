import React from 'react'
import { figures } from '../../styles'
import PropTypes from 'prop-types'

const Figure = ({ shape, shapeSize, shapeColor }) => {
  return (
    <div
      style={{
        ...figures[shape],
        backgroundColor: shapeColor,
        width: +shapeSize,
        height: +shapeSize,
      }}
    ></div>
  )
}

Figure.protoTypes = {
  shape: PropTypes.string.isRequired,
  shapeSize: PropTypes.string.isRequired,
  shapeColor: PropTypes.string.isRequired,
}

export default Figure
