import { useState } from 'react';
import Selector from './components/Selector'
import './styles/styles.css'

function App() {
  
  return (
    <>
      <h3>Ejercicio useState y use Effect</h3>
      <div>
        <Selector shape='Triangle' shapeSize='100' shapeColor='#FF0000' />
        <Selector shape='Circle' shapeSize='150' shapeColor='#00FF00' />
        <Selector shape='Square' shapeSize='200' shapeColor='#0000FF' />
      </div>
    </>
  )
}

export default App
