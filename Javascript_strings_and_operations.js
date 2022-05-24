// 1. Javascript Operators Assign two numeric variables a and b Initialise values as 5 and 10 respectively and console log in same order the following:

// Create a variable add and assign it the sum of a and b.
// Create a variable sub and assign it result of b subtracted from a.
// Create a variable mul and assign it the product of a and b.
// Create a variable div and assign it the result of of a divided by b.
// Create a variable inc and assign it the preincremented value of a.
// Create a variable dec and assign it the predecremented value of b.
var a = 5 
var b = 10
var add = a+b;
console.log(add);
var sub = b-a;
console.log(sub);
var mul = a*b; 
console.log(mul);
var div = a/b;
console.log(div);
var inc = ++a;
console.log(inc);
var dec = --b;
console.log(dec);


// 2. Javascript String Assign "Learning Javascript with AlmaBetter" to variable test and perform following

// Console log the length of string
// Extract "AlmaBetter" from string using slice() and console log it
// Replace "Javascript" with "Web3.0" in test and console log it
// Convert test to upper case using built in function and console log it
// Concat "Web3.0 is future" to test and console log it
// Input Format
var string =  "Learning Javascript with AlmaBetter";
console.log(string.length);
var string1 = string.slice(25,35);
console.log(string1);
var string2= string.replace('Javascript' , 'Web3.0');
console.log(string2);
console.log(string.toUpperCase());
var string3 = 'Web3.0 is future';
console.log(string.concat(string3));
