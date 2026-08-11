// 1. Introduction: What is a String?
// A string is a primitive data type in JavaScript used to represent a sequence of characters. Anything you can type—letters, numbers, symbols, punctuation—can be part of a string. It is the primary way we work with textual data.



// ### **2. Creating Strings**

// There are three ways to create a string literal in JavaScript.

// 1. **Single Quotes (`'...'`):**
    
    
    let singleQuoted = 'Hello, world!';
    console.log(singleQuoted);
    
    
// 2. **Double Quotes (`"..."`):** Functionally identical to single quotes. The main reason to choose one over the other is for convenience when a string itself contains quotes.
    
    
    let doubleQuoted = "He said, 'Hello!'"; // Easy to include single quotes
    let singleQuotedWithDouble = 'She replied, "Hi!"'; // Easy to include double quotes
    console.log(doubleQuoted);
    
    
// 3. **Template Literals (``...`` - ES6):** The most powerful and modern way. They use backticks.
// We will cover the special features of template literals later.
    

    let templateLiteral = `This is a template literal.`;
    console.log(templateLiteral);
    
// 3. Core Properties and Concepts
// A. The .length Property


let greeting = "Hello";
console.log(greeting.length); // Outputs: 5

let emptyString = "";
console.log(emptyString.length); // Outputs: 0


// B. Accessing Individual Characters (Zero-Based Indexing)
let message = "JavaScript";
// J  a  v  a  S  c  r  i  p  t
// 0  1  2  3  4  5  6  7  8  9

console.log(message[0]); // "J"
console.log(message[4]); // "S"

// To get the last character, a common pattern is used:
console.log(message[message.length - 1]); // "t"

// C. The Golden Rule: Strings are Immutable

let name = "alex";

// Let's try to change the first character.
name[0] = "A"; // This will FAIL silently. It does nothing.
console.log(name); // Outputs: "alex" (The original string is unchanged)

// Let's use a method that "changes" the string.
let upperName = name.toUpperCase();
console.log(upperName); // Outputs: "ALEX" (This is a NEW string)
console.log(name);      // Outputs: "alex" (The original is still unchanged)


// 4. Common and Essential String Methods

// **A. Changing Case**

// - **`.toUpperCase()`:** Returns a new string with all characters in uppercase.
// - **`.toLowerCase()`:** Returns a new string with all characters in lowercase.
    

    let whisper = "please be quiet";
    let shout = whisper.toUpperCase(); // "PLEASE BE QUIET"
    
    
    // B. Finding Substrings
    let sentence = "The quick brown fox jumps over the lazy fox.";

console.log(sentence.indexOf("fox"));     // 16 (the first one)
console.log(sentence.lastIndexOf("fox")); // 40 (the last one)
console.log(sentence.indexOf("cat"));     // -1 (not found)

console.log(sentence.includes("jumps"));  // true
console.log(sentence.includes("cat"));    // false
