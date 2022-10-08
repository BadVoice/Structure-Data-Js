// Task 1: Write a func, times10, that takes an argument, n, and multiples n times 10
// a simple multiplication fn

const memoizedClosureTimes10 = (m) => {
    let cache = { }
    return (n) => {
        if (n in cache){
            return cache[n]
        } else {
            let result = n * m
            cache[n] = result
            return result
        }
    }
}

const memoClosureTimes10 = memoizedClosureTimes10(10)

memoClosureTimes10(9)



