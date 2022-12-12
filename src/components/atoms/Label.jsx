import React from 'react'
import PropTypes from 'prop-types'

const Label = ({ children }) => {
  // Falta la etiqueta htmlFor en el label.
  return <label>{children}</label>
}

Label.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Label
