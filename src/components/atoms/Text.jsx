import React from 'react'
import { colors, dimensions } from '../../styles'
import PropTypes from 'prop-types'

const Text = ({ children, color = colors.font.base, fontSize = dimensions.base }) => {
  return <p style={{ color, fontSize }}>{children}</p>
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  fontSize: PropTypes.string,
}

export default Text
