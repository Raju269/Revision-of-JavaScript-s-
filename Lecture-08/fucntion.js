// what is funciton , why do we need it 

function greeting(){
    console.log("Hello world ");
}
function addNumber(num1,num2){
    console.log(num1+num2);
    return num1+num2;
}

const answer = addNumber(5,3);
console.log(answer)
addNumber(2,3);
greeting();

function addNumber1(num1,num2,num3){
    // console.log(num3)
    
    return num1+num2+num3;
}
console.log(addNumber1)
console.log(addNumber1(2,4));
console.log(addNumber1(5,6,3));   

// ya wala case ko solve kar gha 
function addNumber1(num1,num2,num3 =0){
    // console.log(num3)
    
    return num1+num2+num3;
}
console.log(addNumber1)
console.log(addNumber1(2,4));
console.log(addNumber1(5,6,3));  

// Rest operators  ...rest 
// arr = [23,3,3,62,671,23,667];

function addNumber2(...arr){
    let sum = 0;
    for(const num of arr){
        sum+=num;
    };
    return sum;
}
console.log(addNumber2(2,345,456,345,234,645,2));


let arr = [10,20,30,40,50];

// spread Opertor 
const arr2 = [...arr];
console.log(arr2);

// rest operator 
const [first,second,...third] = arr;
console.log(first,second,third);


// second method to create function 
const greet = function(){
    console.log("Hello ji");
    return 10;
}

greet();

const answer = greet();
console.log(answer);

const addNumber3 = function(num1,num2){
    return num1+num2;
}
console.log(addNumber(2,3));



// Third type se hum function ko banate : Ye aapse jaade use karoge 
// arrow function 

const greet = function(){
    console.log("Hello ji ")
}

greet();

const greet = ()=>{ console.log("Your my arrow function ") };
console.log(greet);

greet();

const addNumber = (num1,num2) => { 
    return num1+num2;
}
console.log(addNumber(3,5));


// short ways to write a function 
// function bhi nahi dikh rha hai 
const addNumber = (num1,num2) => num1+num2;
const answer = addNumber(7,2);
console.log(addNumber(3,5));
console.log(answer);


// const square = (num) => num*num;

// when you have only one parameter no need to used (),
// Backend : Normal function 

// code : Readable : hona chaya 
const square = num => num*num;
console.log(square(3));


// const user = () =>{
//     return {
//         name: "Raju",
//         age : 20,

//     }
// }



const user = () =>({
    name: "Raju",
    age : 20,
    
})
console.log(user());

// 