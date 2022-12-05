import { useEffect, useState } from "react"

const useEqual = (setEqual, equal, shape, size, color) => {
    console.log(size);
    useEffect(() => {
        setEqual({...equal, [shape]: { size, color }})
        console.log(equal);
    }, [size, color])
}

export default useEqual;