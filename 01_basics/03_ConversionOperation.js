let score = true
console.log(typeof(score));

let valueInNumber = Number(score)
console.log(valueInNumber);
console.log(typeof(valueInNumber));

//"33" => 33
//"33abc" => NaN
//true => 1, false => 0
//null => 0
//undefined => NaN
//"Krinesh" => NaN

let isLoggedIn = -12

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// "krinesh" => true
// 1 => true, 0 => false, any +ve & -ve number => true
// "" => false

let someNumber = true

let stringNUmber = String(someNumber)
console.log(stringNUmber)
console.log(typeof(stringNUmber))

// 45 => 45 
// true => true

/**********************************Operation********************************/

let value = 3
let negvalue = -value

console.log(negvalue);

// console.log(1+2);
// console.log(1-2);
// console.log(1*2);
// console.log(1**2);
// console.log(1/2);
// console.log(1%2);

let str1 = "Hello"
let str2 = " krinesh"
let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log(true); //true
// console.log(+true); //1
// console.log(true+); //error!
// console.log(+"");  //0

let gameCounter = 100
gameCounter++;
console.log(gameCounter);

