const bubbleSort = (arr) => {
    let swapped = false

    do {
        swapped = false

        arr.forEach((item, index) => {
            console.log(item, arr[index]);

            if(item > arr[index + 1]) {
                let temp = item
                arr[index] = arr[index + 1]
                arr[index + 1] = temp
                swapped = true
            }
        });
    } while (swapped)

    return arr
}

console.log(bubbleSort([4, 16, 1, 32, 8]));