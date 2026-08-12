let arr = [10,20,30,1,3,4,5];
const answer = arr.sort((a,b)=>a-b);

console.log(answer);

let arr2 = [10,20,30,1,4,6,7,98,-23,-34,-5];
const adder = (a,b) => a-b;
const answer = arr.sort(adder);
// myArrange() ==> Odd number, even number


arr.sorter = function(){
    console.log("Hello ji");
}
console.log(arr.sorter());
