import { useState } from 'react'
import { Text } from './components/atoms'
import { Selector } from './components/molecules'
import { dimensions } from './styles'

function App() {
  const [equal, setEqual] = useState({
    Triangle: { size: '100', color: '#FF0000' },
    Circle: { size: '101', color: '#00FF00' },
    Square: { size: '102', color: '#0000FF' },
  })

  return (
    <div style={{ fontFamily: "'Manrope', sans-serif" }}>
      <Text fontSize={dimensions.xl}>Ejercicio useState y use Effect</Text>
      <div>
        <Selector
          shape='Triangle'
          shapeSize={equal.Triangle.size}
          shapeColor={equal.Triangle.color}
          setEqual={setEqual}
          equal={equal}
        />
        <Selector
          shape='Circle'
          shapeSize={equal.Circle.size}
          shapeColor={equal.Circle.color}
          setEqual={setEqual}
          equal={equal}
        />
        <Selector
          shape='Square'
          shapeSize={equal.Square.size}
          shapeColor={equal.Square.color}
          setEqual={setEqual}
          equal={equal}
        />
      </div>
    </div>
  )
}

export default App
