import { useEffect } from 'react'

const useEqual = (setFigure, figure, shape, size, color) => {
  useEffect(() => {
    setFigure({ ...figure, [shape]: { size, color } })
    if (figure.Triangle.size === figure.Square.size && figure.Square.size === figure.Circle.size)
      alert('Todas las figuras tienen el mismo tamaño.')
  }, [size])

  useEffect(() => {
    setFigure({ ...figure, [shape]: { size, color } })
    if (
      figure.Triangle.color === figure.Square.color &&
      figure.Square.color === figure.Circle.color
    )
      alert('Todas las figuras tienen el mismo color.')
  }, [color])
}

export default useEqual
