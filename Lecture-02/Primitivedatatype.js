// String 
const firstName = 'Raju';
const lastName = "kumar";
const fullNmae = `My name is ${firstName}  ${lastName}`;
console.log(firstName,lastName,fullNmae);

// Number 
const firstNumber = 234234; 
const float_value = 234.23432;
const notNumber = NaN;
const InfinityValue = Infinity;
console.log(firstNumber,float_value,notNumber,InfinityValue);

// Boolean 
const isHuman   = true;
const isRobet = false;
console.log( isHuman,isRobet);
console.log(typeof isHuman,typeof isRobet);

// Undefined 
let user ; 
console.log(user);
console.log(typeof user);

// Null 
const isabsented = null ;
console.log(isabsented); 
console.log(typeof isabsented); 

// BigInt ; 

const PI_Value = 3142897439823740293n;
const anotherBigint = BigInt(234093204234423);
console.log(PI_Value,anotherBigint);
console.log(typeof PI_Value,typeof anotherBigint);

// Symbols 
const id1 = Symbol('id');
const id2 = Symbol('id');
console.log(id1 === id2); // Outputs: false (every symbol is unique)

console.log(typeof id1)
console.log(typeof id2)


let a = 10;
let b = a; // The value 10 is copied into b

b = 20; // This only changes b

console.log(a); // Outputs: 10 (a is unaffected)
console.log(b); // Outputs: 20