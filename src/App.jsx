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
    <div style={{ fontFamily: "'Manrope', sans-serif", display: 'flex', flexDirection: 'column' }}>
      <Text fontSize={dimensions.xl}>Ejercicio useState y useEffect</Text>
      <div>
        <Selector
          defaultSize={figures.Triangle.size}
          defaultColor={figures.Triangle.color}
          setFigures={setFigures}
          figures={figures}
        />
      </div>
    </div>
  )
}

export default App
