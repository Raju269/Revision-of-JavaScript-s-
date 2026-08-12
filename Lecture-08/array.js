// let letstudent1 = "Vikas";
// let letstudent2 = "j";
// let letstudent3 = "o";
// let letstudent4 = "s";
// let letstudent6 = "V";
// let letstudent7 = "c";

// console.log(letstudent1);
// console.log(letstudent2);
// console.log(letstudent3);
// console.log(letstudent4);
// console.log(letstudent6);
// console.log(letstudent7);

// let students = ['Rohit','vikas',10,20,30,40];
// console.log(students)
// console.log(students.length);
// console.log(typeof students);
// console.log(students[0])
// console.log(students[1])
// console.log(students[2])
// console.log(students[3])
// console.log(students[4])
// console.log(students[5])


// for(let i=0;i<students.length;i++){

//     console.log(students[i]);
// }


// let fruits = ["Apple", "Banana", "Cherry"];
// // Index:      0        1         2

// // Accessing (reading) an element
// console.log(fruits[0]); // "Apple"

// // Changing (writing) an element
// fruits[1] = "Blueberry";
// console.log(fruits); // ["Apple", "Blueberry", "Cherry"]

// // Getting the last element
// console.log(fruits[fruits.length - 1]); // "Cherry"

// fruits.push("organse")
// fruits.push("Mango");
// console.log(fruits);

// fruits.pop();
// // fruits.pop();
// console.log(fruits);

// fruits.unshift("Graphes");
// fruits.unshift("kiwi");
// fruits.unshift("Gavaua");
// console.log(fruits);
// fruits.shift();
// fruits.shift();
// console.log(fruits);


// let scores = [98, 85, 100];
// let total = 0;

// // The loop runs as long as `i` is less than the array's length.
// for (let i = 0; i < scores.length; i++) {
//   console.log(`Processing score at index ${i}: ${scores[i]}`);
//   total = total + scores[i];
// }

// console.log(`The total score is: ${total}`); // 283


// let names = ["Alice", "Bob", "Charlie"];

// for (const name of names) {
//   console.log(`Hello, ${name}!`);
// }


// let number = [10,20,30, 40,50];
// for(let b of number){
//     console.log(b);
// }

// let stringvalue = ['a','c','b','e'];
// for(let e of stringvalue){
//     console.log(e);
// }

// let num = [1,2,3,4,5,6,7,8,9,10];
// for(let n of num){
//     console.log(n);
// }

// spread operator 
// let arr = [10,20,30,40];
// console.log(...arr);
// const b =[ ...arr];
// console.log(b);

// const names = ["Alice", "Bob", "Charlie"];
// const nameList = names.join(", ");
// console.log(nameList); // "Alice, Bob, Charlie"



// const numbers = [10, 20, 30, 20, 40];

// console.log(numbers.indexOf(20));    // 1 (the first occurrence)
// console.log(numbers.lastIndexOf(20)); // 3 (the last occurrence)
// console.log(numbers.indexOf(99));    // -1

// console.log(numbers.includes(30));   // true
// console.log(numbers.includes(99));   // false



// let fruits = ["Cherry", "Apple", "Banana"];
// fruits.sort();
// console.log(fruits); // ["Apple", "Banana", "Cherry"] (This works as expected)

// let number = [3,5,2,1,6,10,234,23,58];
// number.sort();
// console.log(number);