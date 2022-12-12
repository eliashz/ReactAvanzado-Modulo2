import { useState } from 'react'
import { Text } from './components/atoms'
import { Circle, Triangle, Square } from './components/organism'
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
      <Triangle setTriangle={setTriangle} triangle={triangle} />
      <Circle setCircle={setCircle} circle={circle} />
      <Square setSquare={setSquare} square={square} />
    </div>
  )
}

export default App
