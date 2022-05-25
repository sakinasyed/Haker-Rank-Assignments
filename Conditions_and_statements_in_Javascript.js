// 1. Write a JavaScript program that accept two integers and display the larger.
var num1 = 5;
var num2 = 10;
 if(num1>num2){
    console.log(`The larger of 5 and 10 is ${num1}.`);
}else{
    console.log(`The larger of 5 and 10 is ${num2}.`);
}

// 2. Write a JavaScript program that checks if input number is even or odd by using “%” operator in JavaScript.
var num3 = 17.5;
var num4 = 42;
if (num3%2==0){
    console.log(`${num3} is even`);
}else{
        console.log(`${num3} is odd`);
}
if (num4%2==0){
    console.log(`${num4} is even`);
}else{
        console.log(`${num4} is odd`);
}

// 3. Write a JavaScript program that checks if input variable is a number by using isNaN() in-built JavaScript function.
var var1 = 50;
var var2 = '42F';
if(isNaN(var1)){
    console.log(`${var1} is not a number`);
}else{
        console.log(`${var1} is a valid number`);
}
if(isNaN(var2)){
console.log(`${var2} is not a number`);
}else{
        console.log(`${var2} is a valid number`);
}
