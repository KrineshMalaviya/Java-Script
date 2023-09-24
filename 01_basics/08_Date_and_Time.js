// Dates
 
let myDate = new Date()

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString()); // Sun sep 24 2023
// console.log(myDate.toISOString()); // same output myDate and myDate.toISOString()
// console.log(myDate.toJSON()); //same above
// console.log(myDate.toLocaleString()); //Date & time with AM/PM
// console.log(myDate.toLocaleTimeString()); //only time with AM/PM


/*************IMPORTANT*******************/
console.log(typeof(myDate)); //Object

// let myCreatedDate = new Date(2023, 0, 23) //month start in js 0 is january
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-12")
let myCreatedDate = new Date("01-12-2023")
// console.log(myCreatedDate.toLocaleString());


// let myTimeStamp = new Date();
let myTimeStamp = Date.now(); //another way to define object
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000)); //interview ask convert into second


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay()); // sun-0
console.log(`${newDate.getDay()} and the time is ${newDate.getTime()}`);

newDate.toLocaleString("default",{
    weekday: "long",
})

