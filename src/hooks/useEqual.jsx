import { useEffect } from "react"

const useEqual = (setEqual, equal, shape, size, color) => {
    useEffect(() => {
        setEqual(equal => ({...equal, [shape]: { size, color }}))
        if (equal.Triangle.size === equal.Square.size && equal.Square.size === equal.Circle.size) alert("Todas las figuras tienen el mismo tamaño.")
        //console.log(equal, size);
    }, [size])

    useEffect(() => {
        setEqual(equal => ({...equal, [shape]: { size, color }}))
        if (equal.Triangle.color === equal.Square.color && equal.Square.color === equal.Circle.color) alert("Todas las figuras tienen el mismo color.")
    }, [color])
}

export default useEqual;