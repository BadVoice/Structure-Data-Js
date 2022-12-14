// mid =  low + (high -  low) / 2 
// [1, 2, 3, 4, 5, 6, 7]
class Solution {
    binarysearch(arr, n, k) {
       let low = 0
       let high = arr.length - 1
        
       while (low <= high){
           let mid = Math.round(low + (high - low) / 2)
           if(k < arr[mid]) {
               high = mid - 1
           } else if (k > arr[mid]) {
               low = mid + 1
           } else {
               return mid
           }
        }
        return -1
    }
}