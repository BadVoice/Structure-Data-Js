// Approach 1: compare all numbers to one another 
// #of hotels (n) | 3 |
// #Ops           | 9 | 
// we call this O(n^2) QUADRATIC | SUPER SLOOOOOOW

let hotels1 = [
    {price:200, brand: 'Estin'},
    {price:50, brand: 'Best Eastern'},
    {price:175, brand: 'Radishin'}
]

// Approach 2: Track min & max
//  we consider this O(2n)
// this O(n), linear

let hotels2 = [
    {price:200, brand: 'Estin'},
    {price:50, brand: 'Best Eastern'},
    {price:175, brand: 'Radishin'}
]

// Approach 3: Sorted List
//  of Operations 2. Algos. Sorted list, find first and last 
// this O(1), constant | SUPER FAST
let hotels3 = [
    {price:200, brand: 'Estin'},
    {price:50, brand: 'Best Eastern'},
    {price:175, brand: 'Radishin'}
]