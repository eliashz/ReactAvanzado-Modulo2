const allEqual = (triangle, circle, square, index) =>
triangle[index] === circle[index] &&
circle[index] === square[index] &&
alert(`Todas las figuras tienen el mismo ${index === 0 ? 'tamaño' : 'color'}.`)

export default allEqual