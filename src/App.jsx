import { useState } from 'react'
import { Triangle, Circle, Square, Input, Label, Text } from './components/atoms'
import { dimensions } from './styles'

function App() {
  const [triangle, setTriangle] = useState(['99', '#FF0000'])
  const [circle, setCircle] = useState(['100', '#00FF00'])
  const [square, setSquare] = useState(['101', '#0000FF'])

  return (
    <div style={{ fontFamily: "'Manrope', sans-serif", display: 'flex', flexDirection: 'column' }}>
      <Text fontSize={dimensions.xl}>Ejercicio useState y useEffect</Text>
      <div style={{ marginBottom: '50px', display: 'flex', flexDirection: 'column' }}>
        <Label>
          Triangle Size
          <Input
            type='number'
            style={{ width: '50px' }}
            min='1'
            setValue={setTriangle}
            valueArr={triangle}
            value={triangle[0]}
            index={0}
          ></Input>
        </Label>
        <Label>
          Triangle Color
          <Input type='color' setValue={setTriangle} valueArr={triangle} value={triangle[1]} index={1}></Input>
        </Label>
        <Triangle size={triangle[0]} color={triangle[1]} />
        {/*         <Circle size={circle[0]} color={circle[1]} />
        <Square size={square[0]} color={square[1]} /> */}
      </div>
    </div>
  )
}

export default App
