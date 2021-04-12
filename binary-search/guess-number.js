// I pick a number from 1 to n. You have to guess which number I picked.


const guessNumber = (n, pick) => {
    let left = 0
    let right = n
    
    while (left < right) {
        let mid = Math.floor((left + right) / 2)

        if (mid == pick) {
            return mid
        } else if (pick < mid) {
            right = mid
        } else if (pick > mid) {
            left = mid + 1
        }
    }

    return left - 1
}

console.log(guessNumber(10, 2));