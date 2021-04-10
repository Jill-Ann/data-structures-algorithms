const quickSort = (arr) => {
    if (arr.length < 2) return arr
    let pivotIndex = Math.floor(arr.length / 2)
    let pivot = arr[pivotIndex]

    let lesserArr = []
    let greaterArr = []

    for (i=0; i<arr.length; i++) {
        if (i !== pivotIndex) {
            arr[i] < pivot ? lesserArr.push(arr[i]) : greaterArr.push(arr[i])
        }
    }

    return [...quickSort(lesserArr), pivot, ...quickSort(greaterArr)]
}

console.log(quickSort([3, 1, 9, 8, 2, 6, 5, 4, 7, 0]));