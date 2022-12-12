import React from 'react'
import { CircleFigure } from '../atoms'
import { SelectorColor, SelectorNumber } from '../molecules'
import PropTypes from 'prop-types'

const Circle = ({ setCircle, circle }) => {
  return (
    <div>
      <SelectorNumber setValue={setCircle} value={circle}>
        Circle
      </SelectorNumber>
      <SelectorColor setValue={setCircle} value={circle}>
        Circle
      </SelectorColor>
      <CircleFigure size={circle[0]} color={circle[1]} />
    </div>
  )
}

Circle.propTypes = {
  setCircle: PropTypes.func.isRequired,
  circle: PropTypes.array.isRequired,
}

export default Circle
