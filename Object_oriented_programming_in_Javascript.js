// 1. Create a JavaScript Object called User which has 2 properties fName and lName and try printing the lName in Console.
let names = {
    fname: "Dillion",
    lname: "Megida"
}
    console.log(names.lname)

// 2. Create a JavaScript constructor function called Animals which accepts 2 input parameters (name and specie) as arguments and stores them internally. Now create a proto function called sing that prints the name of the animal with 'can sing' returned at the end.
function Animals(name, species){
    const animal = {};
    animal.name = name;
    animal.species = species;
    animal.quality = function(){
        return `${this.name} can sing`;
    }
return animal;
}
const dog = new Animals("Pogo", "Dog");
console.log(dog.quality());

// 3. Create the same above question using class keyword.
class Animalls{
    constructor(name, species){
       this.name = name;
       this.species = species; 
    }
    quality(){
        return `${this.name} can sing`;
    }
}
const cat= new Animalls("Billi", "Cat");
console.log(cat.quality());