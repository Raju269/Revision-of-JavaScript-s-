// Non Primitive Data types
const personDetails = {
    name : 'Raju ',
    lastName : 'kumar',
    Age : 22,
}
console.log(personDetails);
console.log(typeof personDetails);

const number = [10,20,30,40,50];
console.log(number);
console.log(typeof number)

function sayMyName(){
    console.log("My name is Raju kumar ");
}
sayMyName();
console.log(sayMyName());
console.log(typeof sayMyName);


let obj1 = { value: 10 };
let obj2 = obj1; // The reference to the object is copied into obj2

// Both obj1 and obj2 now point to the exact same object in memory
obj2.value = 20; // We are modifying the object through obj2

console.log(obj1.value); // Outputs: 20 (obj1 is affected because it points to the same object)
console.log(obj2.value); // Outputs: 20