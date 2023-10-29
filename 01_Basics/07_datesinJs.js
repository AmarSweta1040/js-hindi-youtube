// Dates

let myDate = new Date() // Declaring a myDate as a varible name
console.log(myDate.toString());// Sun Oct 29 2023 11:16:33 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); // Sun Oct 29 2023 (Todays Date)
console.log(myDate.toJSON()); // 2023-10-29T11:16:33.665Z
console.log(typeof myDate); // object

//If we want to Declare our own Date, we will declare like this.
//In the first we have to give year, date and day
//In JavaScript Months are Start from 0, means Jan = 0, Feb = 1, Dec = 11
let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString()); // Mon Jan 23 2023

//If we put 12 as a Year, it will move to next year
let myCreatedDate2 = new Date(2023, 12, 23)
console.log(myCreatedDate2.toDateString());// Tue Jan 23 2024

//If we want to declare time with date
let myCreatedDate3 = new Date(2023, 12, 23, 5, 5)
console.log(myCreatedDate3.toLocaleString()); // 1/23/2024, 5:05:00 AM

//Other way to declare date in which by Default time is 12:00Am
let myCreatedDate4 = new Date("2023-01-04");
let myCreatedDate5 = new Date("04-01-2023");
console.log(myCreatedDate4.toLocaleString()); // 1/4/2023, 12:00:00 AM
console.log(myCreatedDate5.toLocaleString()); // 1/4/2023, 12:00:00 AM


let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate5.getTime());
console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate); // 2023-10-29T11:30:23.211Z
console.log(newDate.getMonth() + 1);// 10
console.log(newDate.getDate()); // 29
