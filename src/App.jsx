import { useState } from 'react'
import { Text } from './components/atoms'
import { Selector } from './components/molecules'
import { dimensions } from './styles'

function App() {
  const [figures, setFigures] = useState({
    Triangle: { size: '99', color: '#FF0000' },
    Circle: { size: '100', color: '#00FF00' },
    Square: { size: '101', color: '#0000FF' },
  })

  return (
    <div style={{ fontFamily: "'Manrope', sans-serif" }}>
      <Text fontSize={dimensions.xl}>Ejercicio useState y useEffect</Text>
      <div>
        <Selector
          shape='Triangle'
          shapeSize={figures.Triangle.size}
          shapeColor={figures.Triangle.color}
          setFigures={setFigures}
          figures={figures}
        />
        <Selector
          shape='Circle'
          shapeSize={figures.Circle.size}
          shapeColor={figures.Circle.color}
          setFigures={setFigures}
          figures={figures}
        />
        <Selector
          shape='Square'
          shapeSize={figures.Square.size}
          shapeColor={figures.Square.color}
          setFigures={setFigures}
          figures={figures}
        />
      </div>
    </div>
  )
}

export default App
