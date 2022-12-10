export default function onChangeHandler (e, setValue, valueArr, index) {
    const newArr = [...valueArr]
    newArr[index] = e.target.value
    setValue(newArr)
      
}
