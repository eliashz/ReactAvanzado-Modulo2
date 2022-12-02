import React from 'react';
import PropTypes from 'prop-types';
import { colors, dimensions } from '../../styles';


export default function Text ({children, color = colors.s, fontSize = dimensions.font.base }) {
  return (
    <p style={{ color, fontSize }}>{children}</p>
  )
}

Text.PropTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  handleClick: PropTypes.func,
}
