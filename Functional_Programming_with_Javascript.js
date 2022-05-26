// 1. Create a pure function that multiplies 2 numbers
const multiply= (a,b)=>{
    return a*b;
}
const result = multiply(2, 3);
console.log(result);

// 2. Create a javascript function that checks if a number is even or not. Use the filter higher order function to receive the even function, and return a list of even numbers.
const listOfNumbers = [1,2,3,4,5,6,7,8,9,10];
    const numbers = (num)=>{
        if (num % 2 == 0){
            return num;
        }
    }
    const evenNumbers = listOfNumbers.filter(numbers);
    console.log(evenNumbers.join('\r\n'));

// 3. Create a simple function composition in which one function adds 5 to a number and then the other function divides the result with 2.
const divide = (n)=>{
    return n/2;
}
const fg = (n)=>{
    const add = n + 5;
    const div = divide(add)
    return div;
}
const resultt = fg(5);
console.log(resultt);