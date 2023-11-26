// if
//If condition must be true then only we can execute if block
//if (condition){
//
//}

// <, >, <=, >=, ==, !=, ===, !==

// == this operator checks only value
if (2 == "2"){
    console.log("Double Equal to Operator Executed");
}
// === this operator check both value as well as datatype
if (2 === "2"){
    console.log("Triple Equal to Operator Executed");
}
const isUserLoggedIn = true

if (isUserLoggedIn){

}


const temperature = 41
if (temperature < 50){
    console.log("Less then 50");
}
console.log("More then 50");


// if else
const age = 57
if (age > 17){
    console.log("Elegible to Vote");
} else {
    console.log("Not Elegible to vote");
}

console.log("This part we will execute because it is out of the scope of if and else block");



// const score = 200  
// if (score > 100){
//     const power = "fly"
//     console.log(`User Power : ${power}`); // User Power : fly
// }
// console.log(`User Power : ${power}`); // power is not defined because it is out of scope

const balance = 1000
if (balance > 500) console.log("test");

//Nesting.....................................

if (balance < 500){
    console.log("Less then");
} else if(balance < 750){
    console.log("Less the  750");
} else if (balance < 900){
    console.log("Less than 900");
} else {
    console.log("Balanace is ok");
} // Output -> Balance is ok



// Real Life Example ..............................

const userLoggedIn = true
const debitCard = true
if (userLoggedIn && debitCard){ // And Operation
    console.log("Allow to do Shoping");
}
const loggedInFromGmail = false
const loggedInFromHotmail = true
if (loggedInFromGmail || loggedInFromHotmail){ // Or Operation
    console.log("Allowed to Enter");
}