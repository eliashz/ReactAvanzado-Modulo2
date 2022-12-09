import { useEffect } from 'react'

// este hook no tiene sentido, mejor tener una función generica de igualdad entre los elementos que le pasas en la carpeta helpers.
// Algo como:
// const allEqual = (arr) => arr.every( v => v === arr[0] )
const useEqual = (setFigures, figures, shape, size, color) => {
  useEffect(() => {
    figures[shape].size = size
    //setFigures({ ...figures, [shape]: { size, color } })
    if (figures.Triangle.size === figures.Square.size && figures.Square.size === figures.Circle.size)
      alert('Todas las figuras tienen el mismo tamaño.')
  }, [size])

  useEffect(() => {
    figures[shape].color = color
    //setFigures({ ...figures, [shape]: { size, color } })
    if (figures.Triangle.color === figures.Square.color && figures.Square.color === figures.Circle.color)
      alert('Todas las figuras tienen el mismo color.')
  }, [color])
}

export default useEqual
