import { useEffect } from "react"

const allEqual = (triangle, circle, square, index) =>

useEffect(() => {
    triangle[index] === circle[index] &&
    circle[index] === square[index] &&
    alert(`Todas las figuras tienen el mismo ${index === 0 ? 'tamaño' : 'color'}.`)
}, [triangle[index], circle[index], square[index]])
    
export default allEqual