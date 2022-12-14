// [12, 35, 1, 10, 34, 1]

class Solution{
    print2largest(arr,n){
        let largest = arr[0]; 
        let secondlar = -1;

    for(let i = 1; i < n; i++)
    {
        if(arr[i] > largest){
            secondlar = largest; 
            largest = arr[i]; 
        }
        
        if(arr[i] < largest && arr[i] > secondlar)
        secondlar = arr[i];
    }

    return secondlar;
        
    }
}

