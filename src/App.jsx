import { useState } from 'react'
import { Triangle, Circle, Square, Input, Label, Text } from './components/atoms'
import { TriangleSelector } from './components/molecules'
import { dimensions } from './styles'

function App() {
  const [circle, setCircle] = useState(['100', '#00FF00'])
  const [square, setSquare] = useState(['101', '#0000FF'])

  return (
    <div style={{ fontFamily: "'Manrope', sans-serif" }}>
      <Text fontSize={dimensions.xl}>Ejercicio useState y useEffect</Text>
      <div style={{ marginBottom: '50px', display: 'flex', flexDirection: 'column' }}>
        <TriangleSelector />
        {/*         <Circle size={circle[0]} color={circle[1]} />
        <Square size={square[0]} color={square[1]} /> */}
      </div>
    </div>
  )
}

export default App
