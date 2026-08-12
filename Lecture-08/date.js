const now = new Date();

console.log(now);
// 2026-08-08T02:42:08.024Z
//  UTC to according +(5.30UTC)

console.log(now.toString());

// behind the scence of time to implemented local machine sa pick kar rha hai 
// agar system settings ko chage kar dha to value change ho jha gha 
// 

console.log(now.getDate()); 
console.log(now.getDay()); 
console.log(now.getFullYear()); 
console.log(now.getMonth()); 


// jan: 0 , feb: 1, mar: 2 ... dec: 11
// mon:1, tue: 2, ... sun: 7 

// why to change this methd jan :  0 they have problem of old websites to crashes that why they not implemented and corrcted 
// to make major bussiness and money 

// libraraies: use karenge : date function ki jagha 
console.log(now.getMilliseconds());

const customDate = Date.now();
// Timesstamp : Millisecond : 120934934
// means and why the value of change of Millisecond 
// why time stamp : is se koi help milegi 
// ya coding contest mai used hoga jab lag lag country mai time lag lag hai agar coding contest hota hai tu pata kara hai phale konsa submit kiya hai tu phale UTC mai converted karan hoga is liya time stap used kar dha hai 
console.log(now);

const da = new Date(now);
const da = new Date(0);
const da = new Date(-50);
const da = new Date(-5900);
console.log(da);

// Important question 
// Never trust user data in case of timestap if any competion the useer time change to first submit the can cheet in this competion 
// system desgin and trade off 
//  means times mai both trade off hai 

// timestapm // millisecond : number
const now1 = Date.now();
// number : 8 byte : number overflow  condition aajagi 
// Moder system crash jojayenge
console.log(now1)

// new date(year, month, day, hours,minutes, seconds, ms);

const myDate1  = new Date(2026,8,4, 6,20,11,123)
console.log(myDate1);