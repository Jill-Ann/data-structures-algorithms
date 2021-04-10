// Given a list of daily temperatures T, return a list such that, for each day in the input, tells you how many days you would have to wait until a warmer temperature. If there is no future day for which this is possible, put 0 instead.

// For example, given the list of temperatures T = [73, 74, 75, 71, 69, 72, 76, 73], your output should be [1, 1, 4, 2, 1, 1, 0, 0].

// Note: The length of temperatures will be in the range [1, 30000]. Each temperature will be an integer in the range [30, 100].

const dailyTemperatures = (temps) => {
    let results = new Array(temps.length).fill(0)
    let stack = []

    for (i = temps.length - 1; i >= 0; i--) {
        while (stack.length && temps[i] >= stack[stack.length - 1][0]) {
            stack.pop()
        }
        if (stack.length && temps[i] < stack[stack.length - 1][0]) {
            results[i] = stack[stack.length - 1][1] -i
        }
        stack.push([temps[i], i])
    }

    return results
}

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])); // [1, 1, 4, 2, 1, 1, 0, 0]