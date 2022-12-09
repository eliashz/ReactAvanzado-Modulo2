import React from 'react'
import { figures } from '../../styles'
import PropTypes from 'prop-types'

// Demasiada generalización para el nivel atoms
// Utilizaria un componente por cada figura, quedando Triangle.jsx, Circle.jsx y Square.jsx.
// En cada uno de ellos en lugar de aplicar estilos devolvería un SVG y comprobaria las props con PropTypes como haces
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
