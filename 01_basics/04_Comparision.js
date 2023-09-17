// console.log(2 > 0); 
// console.log(2 == 0); 
// console.log(2 >= 0);
// console.log(2 < 0); 
// console.log(2 <= 0); 
// console.log(2 != 0);

console.log("2" > 1); //true
console.log("02" > 1); //true 

/* Avoid this type comparision */
console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true
/*
null conert into 0
The reason is that an equality check == and comparisons < > >= <= work differently.
Comparision convert null to a number, treating it as 0.
That's why (3) null >= 0 is true and (1) null > 0 is false
*/

/* Avoid this type comparision */
console.log(undefined > 0); //false
console.log(undefined == 0); //false
console.log(undefined >= 0); //false

//===
console.log("2" == 2); //true
console.log("2" === 2); //false beacuse check also data type

