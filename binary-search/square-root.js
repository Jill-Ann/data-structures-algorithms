// Given a non-negative integer x, compute and return the square root of x.

// Since the return type is an integer, the decimal digits are truncated, and only the integer part of the result is returned.


const mySqrt = (x) => {
    if (x < 2) return x

    let low = 1
    let high = x
    
    while (low < high) {
        let mid = low + Math.floor((high - low) / 2)

        if (mid * mid == x) {
            return mid
        } else if (mid * mid > x) {
            high = mid
        } else if (mid * mid < x) {
            low = mid + 1
        }
    }

    return low - 1
}

console.log(mySqrt(9));