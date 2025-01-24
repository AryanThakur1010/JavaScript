let score1="33"
let score2="33abc"
let score3=null;
console.log(typeof score1); //string

let valueInNumber1=Number(score1); //WRAPPER
console.log(typeof valueInNumber1); //number

let valueInNumber2=Number(score2);
console.log(typeof valueInNumber2); //number 
console.log(valueInNumber2); //NaN not a number=>33abc

let valueInNumber3=Number(score3)
console.log(typeof valueInNumber3); //number
console.log(valueInNumber3); // 0

//score 4= undefined. valueInNumber4=NaN
//         true/false...............=1/0
//         string ""................=NaN

let isLoggedIn=1;
let booleanIsLoggedIn=Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

//1=>true 0=>false ""=>false "abc"=>true
//can convert to String also



