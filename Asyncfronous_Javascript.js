// 1. Write a Javascript program that increments the count after every 200 ms by 2 and stops incrementing when the count reaches 10
function countUp(){
    for (let i=2; i<=10;i++){
        setTimeout(()=>{
        if(i%2===0){
            console.log(i);
        }
        },i*2000);
    }
}
countUp()

// 2. Write a Javascript program that resolves the fastest promise and prints out its value
const promise1 = new Promise(function(resolve,reject){
    setTimeout(resolve,500,'one');
});
const promise2 = new Promise(function(resolve,reject){
    setTimeout(resolve,100,'two');
});
Promise.race([promise1,promise2]).then((fasterone)=>{
    console.log(fasterone);
})

// 3. Write a Javascript program that resolves a promise if a number is more than 42 else rejects it
const n1 = Promise.resolve(25) 
const n2 = Promise.resolve(69) 

const moreThan42 = (n1)=>{
  n1.then((value)=>{
    setTimeout(()=>{
    if(value>42){
    console.log("This is resolved!")
}else{
    console.log("This is rejected!")
}
},1000)
})
}
moreThan42(n1)
moreThan42(n2)