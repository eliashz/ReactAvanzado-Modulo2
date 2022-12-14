import React from 'react'
import { SquareFigure } from '../atoms'
import { SelectorColor, SelectorNumber } from '../molecules'
import { onChangeHandler } from '../../helpers'
import PropTypes from 'prop-types'

const Square = ({ setSquare, square }) => {
  return (
    <div>
      <SelectorNumber setValue={setSquare} value={square[0]} onChange={e => onChangeHandler(e, setSquare, square, 0)}>
        Square
      </SelectorNumber>
      <SelectorColor setValue={setSquare} value={square[1]} onChange={e => onChangeHandler(e, setSquare, square, 1)}>
        Square
      </SelectorColor>
      <SquareFigure size={square[0]} color={square[1]} />
    </div>
  )
}

Square.propTypes = {
  setSquare: PropTypes.func.isRequired,
  square: PropTypes.array.isRequired,
}

export default Square
