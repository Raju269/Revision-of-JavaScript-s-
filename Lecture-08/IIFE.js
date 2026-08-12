// IIFE

// (function hello(){
//     console.log("hello ji")
// })();

// (function code ka part)() IIFE function 

// javascript function ke andar kisi durse function ko pass kar sath hai 

// call back function 

function greet(){
    console.log("hello ji ")
}
// callback =  greet ka reference gaya hai 

function meet(callback){
    console.log("Hello Meet");
    callback();
    console.log("I am changa si ")
}
// hello meet, hello ji , I am change si
meet(greet);
