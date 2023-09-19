const name = "krinesh"
const repocount = 10

// console.log(name + repocount + "value")
// string interpolation

// console.log(`hello my name is ${name} and my repo count is ${repocount}`);

// another way to define string

const gameName = new String("Krinesh-Malaviya-B.tech It")

// console.log(gameName[0]);
// console.log(gameName.__proto__); //object

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf("e"));

const newString = gameName.substring(30)
//  console.log(newString);
// substring ignore negative value
// index start is graterthan index end so it is automatically swap

const anotherString = gameName.slice(3,-2)
// console.log(anotherString);
// slice use negative value
// space is count
// index start is graterthan index end so it is return empty string

const newStringOne = "   Krinesh   "
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url = "https://krinesh.com/krinesh%20malaviya"
// console.log(url.replace("%20","-"));
// console.log(url.includes("krinesh"));
// console.log(url.includes("javascript"));

// console.log(gameName.split("-"));

const newStringTwo = "name"
console.log(newStringTwo.padStart(11,'kri'));
console.log(newStringTwo.padEnd(11,'kri'));

console.log(newStringTwo.repeat(2));


