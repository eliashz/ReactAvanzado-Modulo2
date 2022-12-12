import { useState } from 'react'
import { TriangleFigure, CircleFigure, SquareFigure, Text } from './components/atoms'
import { SelectorColor, SelectorNumber } from './components/molecules'
import { allEqual } from './helpers'
import { dimensions } from './styles'

function App() {
  const [triangle, setTriangle] = useState(['99', '#FF0000'])
  const [circle, setCircle] = useState(['100', '#00FF00'])
  const [square, setSquare] = useState(['101', '#0000FF'])

  // Same size comprobation
  allEqual(triangle, square, circle, 0)

  // Same color comprobation
  allEqual(triangle, square, circle, 1)

  return (
    <div style={{ fontFamily: "'Manrope', sans-serif" }}>
      <Text fontSize={dimensions.xl}>Ejercicio useState y useEffect</Text>
      <div>
        <SelectorNumber setValue={setTriangle} value={triangle}>
          Triangle
        </SelectorNumber>
        <SelectorColor setValue={setTriangle} value={triangle}>
          Triangle
        </SelectorColor>
        <TriangleFigure size={triangle[0]} color={triangle[1]} />
        <SelectorNumber setValue={setCircle} value={circle}>
          Circle
        </SelectorNumber>
        <SelectorColor setValue={setCircle} value={circle}>
          Circle
        </SelectorColor>
        <CircleFigure size={circle[0]} color={circle[1]} />
        <SelectorNumber setValue={setSquare} value={square}>
          Square
        </SelectorNumber>
        <SelectorColor setValue={setSquare} value={square}>
          Circle
        </SelectorColor>
        <SquareFigure size={square[0]} color={square[1]} />
      </div>
    </div>
  )
}

export default App
