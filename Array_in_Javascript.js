// 1. Write a simple JavaScript program to join all elements of the following array into a string.
let myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.toString());
console.log(myColor.join("+"));
// 2. Create a new array whose elements is in uppercase of words present in the original array.
let strings = ["avengers", "captain america", "ironman", "black panther"];
const newstring = strings.map(strings => strings.toUpperCase());
console.log(newstring);


// 3.Use the .map() method on the heros array to return a new array.

// The new array should rename the 'name' key to 'hero'.
// The 'name' key should not appear in the new array.
// The new array should have a new key added called (id).
// The key 'id' should be based on the index.
const heros = [ { name: 'Spider-Man' }, { name: 'Thor' }, { name: 'Black Panther' }, { name: 'Captain Marvel' }, { name: 'Silver Surfer' } ];
let newhero = heros.map((hero,index)=>{
  console.log(`index:${index}, hero:${hero.name}`)
})


// 4. Write JavaScript statements that will produce the output mentioned in output format from array in input format
const inputWords = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
console.log(inputWords.slice(3));

