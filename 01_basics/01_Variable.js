const accountid = 1231213;
let accountname = "abc";
var accountemail = "test@gmail.com";
accountcity = "junagadh";
let accountstate;

// accountid = "998989" //not allowed
console.log(accountid);

accountname = "xyz";
accountemail= "krinesh@gmail.com";
accountcity = "Rajkot";

/*
Prefer not to use var
because of issue  in block scope and functional scope
*/

console.table([accountemail, accountid, accountname, accountcity, accountstate]);