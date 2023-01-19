const arr1 = [4, 2, 8, 5, 3, 9, 1, 7, 6];

//Hoare's Partitioning Algorithm
//1. Choose Pivot Value
//2. Scan the values in the array from the left and from the right. 
//3. Swap the values at i and j
//4. Break when i=j
//5. Return j

function quickSort(arr){
    let max = arr.length;
    let min = 0;
    //formula for generating a random number to be the pivot
    let pivot  = arr[Math.floor(Math.random() * (max - min) + min)];
    console.log(pivot);
}

quickSort(arr1);
