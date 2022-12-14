import React from 'react'
import PropTypes from 'prop-types'
import { onChangeHandler } from '../../helpers'

const InputColor = ({ id, name, type, setValue, valueArr, value, index }) => {
  return (
    <input
      id={id}
      name={name}
      type={type}
      value={value}
      // Esta todo muy bien, pero para tener atomos reutilizables no puedes bajar tanta logica, sino, en otros usos no te valdran.
      // Aquí deberia de ser onChange={onChange}
      // En molecules, debería de ser onChange={onChange} también. Donde uses el SelectorColor, es donde deberías de tener la lógica que presentas aquí
      onChange={e => onChangeHandler(e, setValue, valueArr, index)}
    />
  )
}

InputColor.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  valueArr: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
}

export default InputColor
