import React from 'react'
import { figures } from '../styles'

const Figure = ({ shape, shapeSize, shapeColor }) => {

  return (
    <div style={{ ...figures[shape], backgroundColor: shapeColor, width: +shapeSize, height: +shapeSize }}  ></div>
  )
}

export default Figure
