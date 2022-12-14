import React from 'react'
import { CircleFigure } from '../atoms'
import { SelectorColor, SelectorNumber } from '../molecules'
import { onChangeHandler } from '../../helpers'
import PropTypes from 'prop-types'

const Circle = ({ setCircle, circle }) => {
  return (
    <div>
      <SelectorNumber setValue={setCircle} value={circle[0]} onChange={e => onChangeHandler(e, setCircle, circle, 0)}>
        Circle
      </SelectorNumber>
      <SelectorColor setValue={setCircle} value={circle[1]} onChange={e => onChangeHandler(e, setCircle, circle, 1)}>
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
