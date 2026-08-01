const firstNumber = 123; // Decalaration of const variable 
console.log(firstNumber);

if(true){
    const PI = 3.14;
    console.log(PI);
}
// console.log(PI); // Reference error show 
// // also this block scope variable of const 

// // Reassigment is not possible in const 
const firstWord = "Hello";
// firstWord = "World"  // TypeError : Assignment to constant variable 
console.log(firstWord)

// // Mutability
const config_setting = {Port : 4000};
config_setting.Port = 3000;
console.log(config_setting);

const food_items = ['momos','fish','chicken','rice'];
food_items[2] = 'Mango'
console.log(food_items);

// // Temporal Dead Zone concept 
const myTurn = 'True';
console.log(myTurn) // Reference Error 
