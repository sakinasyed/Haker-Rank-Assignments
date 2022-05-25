// 1. Implement sum(1)(2)(3) which should sum the numbers and give 6 as an output using javascript functions.
function sum(a,b,c){
    return a+b+c;
}
console.log(sum(1,2,3));

// 2. Create a function that accepts a number argument and starts a countdown up till that numeric value has become zero and on value becoming zero it should log “DONE” on the console.
function countdown(x){
    for ( let i=x; i>0;i--){
        console.log(i);
    }
    console.log("DONE")
}
countdown(3)


//3.  Please create a function count(), when called it should return how many times it has been called, count.reset() should also implemented.
function count(y){
    for ( let i=1; i<=y;i++){
        console.log(i);
    }
}
count(3);
count(3);