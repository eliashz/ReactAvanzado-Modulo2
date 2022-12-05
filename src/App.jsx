import { useState } from 'react';
import Selector from './components/Selector'
import './styles/styles.css'

function App() {
  const [equal, setEqual] = useState({ 
    Triangle: {size: null, color: null},
    Circle: {size: null, color: null},
    Square: {size: null, color: null}
  });
  
  return (
    <>
      <h3>Ejercicio useState y use Effect</h3>
      <div>
        <Selector shape='Triangle' shapeSize='100' shapeColor='#FF0000' setEqual={setEqual} equal={equal} />
        <Selector shape='Circle' shapeSize='150' shapeColor='#00FF00' setEqual={setEqual} equal={equal} />
        <Selector shape='Square' shapeSize='200' shapeColor='#0000FF' setEqual={setEqual} equal={equal} />
      </div>
    </>
  )
}

export default App
