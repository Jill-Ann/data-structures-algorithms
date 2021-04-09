// Solution incomplete

// Given a list of daily temperatures T, return a list such that, for each day in the input, tells you how many days you would have to wait until a warmer temperature. If there is no future day for which this is possible, put 0 instead.

// For example, given the list of temperatures T = [73, 74, 75, 71, 69, 72, 76, 73], your output should be [1, 1, 4, 2, 1, 1, 0, 0].

// Note: The length of temperatures will be in the range [1, 30000]. Each temperature will be an integer in the range [30, 100].

class Stack {
    constructor() {
        this.stack = []
    }

    get length() {
        return this.stack.length
    }

    push(item) {
        return this.stack.push(item)
    }

    pop() {
        return this.stack.pop()
    }

    peek() {
        return this.stack[this.length - 1]
    }

    isEmpty() {
        return this.length === 0
    }
}

const dailyTemperatures = (temps) => {
    let stack = new Stack
    let results = []

    temps.forEach((item, index) => {
        console.log(stack);
        if(stack.isEmpty()) {
            stack.push(item)
        } else if(item <= stack.peek()) {
            stack.push(item)
        } else if( item > stack.peek()) {
            do {
                // do something with comparing the indexes and push the difference to the results
                stack.pop()
            } while(item > stack.peek())

            stack.push(item)
        }
    })
    console.log(temps);
    return stack
}


console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));

