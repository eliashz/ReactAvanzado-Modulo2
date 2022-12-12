import React from 'react'
import { TriangleFigure } from '../atoms'
import { SelectorColor, SelectorNumber } from '../molecules'
import PropTypes from 'prop-types'

const Triangle = ({ setTriangle, triangle }) => {
  return (
    <div>
      <SelectorNumber setValue={setTriangle} value={triangle}>
        Triangle
      </SelectorNumber>
      <SelectorColor setValue={setTriangle} value={triangle}>
        Triangle
      </SelectorColor>
      <TriangleFigure size={triangle[0]} color={triangle[1]} />
    </div>
  )
}

Triangle.propTypes = {
  setTriangle: PropTypes.func.isRequired,
  triangle: PropTypes.array.isRequired,
}

export default Triangle
