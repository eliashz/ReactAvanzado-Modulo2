import React from 'react'
import { SquareFigure } from '../atoms'
import { SelectorColor, SelectorNumber } from '../molecules'
import PropTypes from 'prop-types'

const Square = ({ setSquare, square }) => {
  return (
    <div>
      <SelectorNumber setValue={setSquare} value={square}>
        Square
      </SelectorNumber>
      <SelectorColor setValue={setSquare} value={square}>
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
