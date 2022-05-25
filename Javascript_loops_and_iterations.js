// 1. Write a Javascript program to get the sum of all the elements in two arrays
let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2];
let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26];
function getSum(x){
    let sum = 0;
    for (let summation of x ){
        sum = sum + summation ;
}
 return sum
}
console.log(getSum(arr_1)+getSum(arr_2));

// 2. Write a Javascript program to print all natural even numbers up to and including 'n' using a loop
let n = 22
for (i=1;i<=n;i++){
    if(i%2==0){
        console.log(i);
    }
}


// 3. Write a Javascript program to print elements in an array in reverse order using a loop
let arr = [43, "what", 9, true, "cannot", false, "be", 3.5, true];

for(let i = arr.length-1; i>=0;i--){
console.log(arr[i]);
}
