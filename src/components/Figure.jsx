import React, { useState, useEffect } from 'react'
import useEqual from '../hooks/useEqual'
import { figures } from '../styles'

const Figure = ({ shape, shapeSize, shapeColor, setEqual, equal }) => {
  useEqual(setEqual, equal, shape, shapeSize, shapeColor)
  /* useEffect(() => {
    setEqual({...equal, [shape]: { size: shapeSize, color: shapeColor }})
    console.log(equal);
  }, [shapeSize, shapeColor]) */

  return (
    <div style={{ ...figures[shape], backgroundColor: shapeColor, width: +shapeSize, height: +shapeSize }}  ></div>
  )
}

export default Figure
