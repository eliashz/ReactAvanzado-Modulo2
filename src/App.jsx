import { useState } from 'react';
import Selector from './components/Selector'
import './styles/styles.css'

function App() {
  const [equal, setEqual] = useState({ 
    Triangle: {size: '100', color: '#FF0000'},
    Circle: {size: '101', color: '#00FF00'},
    Square: {size: '102', color: '#0000FF'}
  });

  return (
    <>
      <h3>Ejercicio useState y use Effect</h3>
      <div>
        <Selector shape='Triangle' shapeSize={equal.Triangle.size} shapeColor={equal.Triangle.color} setEqual={setEqual} equal={equal}/>
        <Selector shape='Circle' shapeSize={equal.Circle.size} shapeColor={equal.Circle.color} setEqual={setEqual} equal={equal}/>
        <Selector shape='Square' shapeSize={equal.Square.size} shapeColor={equal.Square.color} setEqual={setEqual} equal={equal} />
      </div>
    </>
  )
}

export default App
