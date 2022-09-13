let arr = [1, 1, 2, 3, 1, 1, 5]
const reduceTest = arr => {
    return arr.reduce((a, e) => {
        a[e] = a[e] ? a[e] + 1 : 1
        return a
    }, {})
}
console.log(reduceTest(arr))