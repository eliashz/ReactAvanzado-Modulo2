import React from 'react'
import { colors, dimensions } from '../../styles'

const Text = ({ children, color = colors.font.base, fontSize = dimensions.base }) => {
  return <p style={{ color, fontSize }}>{children}</p>
}

export default Text
