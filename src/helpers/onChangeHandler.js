const onChangeHandler = (e, setValue, valueArr, index) => {
    const newArr = [...valueArr]
    newArr[index] = e.target.value
    setValue(newArr)
}

export default onChangeHandler