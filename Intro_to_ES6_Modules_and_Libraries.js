// 1. Construct an object and print out ‘Hello, My name is John Doe’ using literals.
const data = {
    firstName: 'John',
    lastName: 'Doe',
    place: 'Norway',
    occupation: 'Software Developer'
}
    console.log(`Hello, My name is ${data.firstName} ${data.lastName}`)

// 2. Write a Javascript function that imports the lodash module (using commonjs syntax) and iterates through the given array and prints each letter

const letters = ['a', 'b', 'c']
var _ = require("lodash");
const printArr = (arr)=> _.each(arr,(ele)=>console.log(ele));
printArr(letters);