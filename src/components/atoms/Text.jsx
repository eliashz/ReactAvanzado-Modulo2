import React from 'react'

const Text = ({children, color = colors.font.base, fontSize = dimensions.font.base }) => {
  return (
    <p style={{ color, fontSize }}>{children}</p>
  )
}

export default Text
