// 1. Introduction: The Unified Number Type

let integer = 100;
let float = 99.5;

console.log(typeof integer); // "number"
console.log(typeof float);   // "number"

console.log(integer);
console.log(float)

const a = 1123;
const b = 834.23423;
const c = -23432434.234324;
console.log(a,b,c);
console.log(typeof a, typeof b, typeof c);

// 2. Creating Numbers
// Standard Literals:
let a = 25;      // Integer
let b = 12.34;   // Floating-point
console.log(a,b);
console.log(typeof a, typeof b);

const c =234; // Integer value 
const d =90.34; //float value

console.log(c,d);
console.log(typeof c, typeof d)

// Exponential Notation (e): A shorthand for writing very large or very small numbers.

let billion = 1e9;  // 1 followed by 9 zeros -> 1000000000
let tiny = 5e-6;    // 5 / 10^6 -> 0.000005
console.log(billion,tiny)

// Other Bases (Hex, Binary, Octal): You can also represent numbers in other numeral systems.

let hex = 0xFF; // Hexadecimal (base 16) -> 255 in decimal
let binary = 0b1010; // Binary (base 2) -> 10 in decimal
let octal = 0o77; // Octal (base 8) -> 63 in decimal

console.log(hex);
console.log(binary);
console.log(octal);


// This is javascript bug 
// 3. The "Gotcha": Floating-Point Inaccuracy

console.log(0.1 + 0.2); // Outputs: 0.30000000000000004
console.log(0.1 + 0.2 === 0.3); // false

console.log((0.1 + 0.2).toFixed(2));

const a = 0.1 + 0.2;
const b = 0.3;

console.log(Math.abs(a - b) < Number.EPSILON);
// **How to handle this:**

// 1. **For financial calculations:** Never use floating-point numbers. Work with integers (e.g., store money in cents).
// 2. **For display:** Use the `.toFixed()` method to round the result to a specific number of decimal places.
// 3. **For comparison:** Check if two numbers are "close enough" using `Number.EPSILON`.

// 4. Special Numeric Values
console.log(1 / 0);          // Infinity
console.log(-1 / 0);         // -Infinity
console.log(typeof Infinity); // "number"


console.log("hello" / 2);    // NaN
console.log(Math.sqrt(-1));  // NaN
console.log(typeof NaN);     // "number"


console.log(NaN === NaN); // false


// // 5. Important Number Properties and Methods

console.log("Number.MAX_VALUE:", Number.MAX_VALUE);
console.log("Number.MIN_VALUE:", Number.MIN_VALUE);

console.log("Number.MAX_SAFE_INTEGER:", Number.MAX_SAFE_INTEGER);
console.log("Number.MIN_SAFE_INTEGER:", Number.MIN_SAFE_INTEGER);

console.log("Number.EPSILON:", Number.EPSILON);

// Safe integer example
console.log(
  Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2
); // true — precision is lost

// Floating-point comparison
const a = 0.1 + 0.2;
const b = 0.3;

console.log("Direct comparison:", a === b); // false

console.log(
  "Using Number.EPSILON:",
  Math.abs(a - b) < Number.EPSILON
); // true

console.log(Math.abs(-234));
console.log(Math.sqrt(25));

// B. Checking Number Types
isNaN("blue");       // true (coerces "blue" to NaN)
Number.isNaN("blue"); // false (it's a string, not NaN)

let result = 0 / 0; // result is NaN
isNaN(result);       // true
Number.isNaN(result); // true
console.log(result);

// C. Formatting and Converting Numbers
// toString(base)

// let num = 255;
console.log(num.toString());    // "255" (base 10 - default)
console.log(num.toString(16));  // "ff"  (base 16 - hexadecimal)
console.log(num.toString(2));   // "11111111" (base 2 - binary)


// .tofixed(digits)
let price = 19.991234;
console.log(price.toFixed(4)); // "19.99"


// .toPrecision(digits)
let n = 123.556;
console.log(n.toPrecision(4)); // "123.5" (4 significant digits)

// // 6. The Math Object

// // Mathematical constants
console.log("PI:", Math.PI);
console.log("Euler's number:", Math.E);

// Number for rounding examples
const number = 4.7;
const negativeNumber = -4.7;

console.log("\nRounding:");
console.log("Math.round(4.7):", Math.round(number)); // 5
console.log("Math.floor(4.7):", Math.floor(number)); // 4
console.log("Math.ceil(4.7):", Math.ceil(number));   // 5
console.log("Math.trunc(4.7):", Math.trunc(number)); // 4

console.log("\nNegative number rounding:");
console.log("Math.round(-4.7):", Math.round(negativeNumber)); // -5
console.log("Math.floor(-4.7):", Math.floor(negativeNumber)); // -5
console.log("Math.ceil(-4.7):", Math.ceil(negativeNumber));   // -4
console.log("Math.trunc(-4.7):", Math.trunc(negativeNumber)); // -4

// // Other common functions
console.log("\nOther functions:");
console.log("Math.abs(-25):", Math.abs(-25));       // 25
console.log("Math.pow(2, 3):", Math.pow(2, 3));    // 8
console.log("2 ** 3:", 2 ** 3);                   // 8
console.log("Math.sqrt(64):", Math.sqrt(64));     // 8

console.log("Math.max(10, 5, 20):", Math.max(10, 5, 20)); // 20
console.log("Math.min(10, 5, 20):", Math.min(10, 5, 20)); // 5

// Random decimal between 0 and 1
const randomDecimal = Math.random();
console.log("Random decimal:", randomDecimal);

// Random integer from 1 to 10
const randomNumber = Math.floor(Math.random() * 10) + 1;
console.log("Random number from 1 to 10:", randomNumber);

