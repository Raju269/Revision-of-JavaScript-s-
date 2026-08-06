// Initialization: let i = 1; (Start a counter at 1)
// Condition: i <= 5; (Keep looping as long as i is less than or equal to 5)
// Final-Expression: i++; (After each loop, add 1 to i)

// for (let i = 1; i <= 5; i++) {
//   console.log("This is repetition number:", i);
// }

// for(let i=0;i<10;i++){
//   console.log("hello ji ");
// }


// while loops 
// let playerHealth = 10;

// while (playerHealth > 0) {
//   console.log(`Player health is ${playerHealth}. Attacking monster!`);
  
//   // Inside the loop, we must change the variable to avoid an infinite loop
//   playerHealth -= 3; // Player takes 3 damage

//   if (playerHealth <= 0) {
//     console.log("Player has been defeated!");
//   }
// }

// Do while loop 
let userResponse;

do {
  // This code will always run at least one time
  userResponse = prompt("Please type 'yes' to continue:"); 
  console.log("I will run at once if condition is false ")
  // The prompt() function shows a popup in the browser

} while (userResponse !== "yes");

console.log("You typed 'yes'. Thank you!");