// 1. CRUD our Objects

// Create a new object called person and give it properties like name, jobTitle, email, isVerified (boolean, value = false) (Create operation)
// Print only the name and the verified status of the person. (Read operation)
// Change the isVerified status to true. (Update operation)
// Remove the property name and add two new properties firstName and lastName (Delete operation)
// Print the final object person.
let person = {name: 'John', JobTitle: 'Developer', email: 'almabetter.com',isVerified : false};
console.log(person.name);
console.log(person.isVerified);
person['isVerified'] = true;
person['firstName']= 'John';
person['lastName']= 'Snow';
delete(person.name);
console.log(person);


// 2. Updating Nested Objects

// Use the object given here as the database object.
// Update the userDetails object with your details. Keep the status property same as this.
// Add new status property isProMember to the new object and set it to false.
// console log resultant object
const userDetails = { name: { first: "Kapil", last: "Raghuwanshi", }, jobTitle: "JS Instructor@Almabetter.com", email: { work: "kapil@google.com", personal: "", }, status: { isOnline: true, isVerified: false, } }
userDetails.name.first = 'John';
userDetails.name.last = 'Snow';
userDetails['isProMember']= false;
console.log(userDetails);


//3. Updating Nested Objects

// Use the object given here as the database object.
// Use the destructuring syntax to store only the values of name, jobTitle and work properties to respective variables
// console log all 3 variables together
const userActivity3 = {name: "Rahul", jobTitle: "JS Instructor@almabetter.com", work: "rahul@microsoft.com", region: "Hyderabad"};
const {name, jobTitle, work}= userActivity3;
console.log(name, jobTitle, work);