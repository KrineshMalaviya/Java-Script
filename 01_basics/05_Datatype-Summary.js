/****Primitive****/

// 7 types: String,  Number, Boolean, null => means empty not 0, undefined, 
//          Symbol => kisi bhi value ko unique bnaneke liye
//          Bigint => big value , scientific value

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId); //false beacuse symbole is uniquely represent

const bigNumber = 343564465664n;
console.log(typeof bigNumber);

/****Reference (Non primitive)****/

// Array, object, Function

let a = [1,2,3,4];
let b = a;
console.log(b.pop());  
console.log(b); //[1, 2, 3]
console.log(a); //[1, 2, 3]
/*							 a[12]
			   {  me-->          remote         <--rahul
			      so this remote is my and rahul, one day rahul break the remote so this remote is both guy
				   so me and rahul both not access TV.
			   }
*/         



/*
js is dynamically type language beacuse
=>JavaScript is a dynamically typed language, which means that data types of variables are 
  determined by the value they hold at runtime and can change throughout the program as we 
  assign different values to them 
*/

