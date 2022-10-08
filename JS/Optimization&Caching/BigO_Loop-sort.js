// Task: Transorm this simple sorting algorithm into a uniqie sort. 
// It should not return any duplicate values in the sorted array. 

// input: [1,5,2,1] => output: [1,2,5]

const uniqSort = function(arr) {
    const breadcrumbs = {};

    return arr.sort((a, b) => a - b)
}

uniqSort([4,2,2,3,2,2,2]); // => [2, 3, 4]


// sort & loop

const uniqSort2 = function(arr2) {
    const breadcrumbs2 = {}
    const result = []

    for (let i = 0; i < arr.length; i++) {// start loop at 1 as element 0 can never be a duplicate
        if (!breadcrumbs2[arr2[i]]){
            result.push(arr[i])
            breadcrumbs2[arr[i]] = true
        }
    }
    return result.sort((a, b) => a - b)
}

uniqSort2([4,2,2,3,2,2,2]); // => [2, 3, 4]