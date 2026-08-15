
// let studentRollNo = [1,2,3,4,5,6,7];
// // console.log(studentRollNo);

const { use } = require("react");

// // let student1 = "Rohit";
// // let student2 = "Mohit";
// // let student3 = "Aman";
// // console.log(student1)
// // console.log(student2)
// // console.log(student3)

// // for(let std of studentRollNo){
// //     console.log(std);
// // }

// // studentRollNo.push(10);
// // console.log(studentRollNo);


// // spead operator ...
// let copy = [...studentRollNo]
// // console.log(copy)

// // console.log(studentRollNo.join(","));
// // console.log(studentRollNo.indexOf(3));
// // console.log(studentRollNo.lastIndexOf(7));


// let arr = [1,34, 45,23, 56,676,67,5];
// let brr = ['a','c','h','m','b'];
// console.log(brr.sort());
// console.log(arr.sort((a,b)=>b-a));

// JavaScipt Object 
const user = {
    name : "vedant",
    age:23,
    ispassout: true,

    greet: function(){
        console.log(`Hello ji ${this.name}`)
    }
    
}

// console.log(user)

// const users = {};

// console.log(users)
// console.log(user.name);
// console.log(user["age"]);

// user.name = "raju";
// console.log(user)

// user.issalary = 2342343;
// console.log(user)

// delete user.age;
// console.log(user)

// user.greet();

for(let a in user){
    console.log(a, user[a]);
}