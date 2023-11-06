// singleton 

// Constructor method to create Object is
//--> ******Object.create 
//-^- iske andar hi singleton banta h
//Other way to creat
// ******************object literal
const JsUser = {}// Now this is the object

const JsUser1 = {
    name : "Amar", // String
    age : 22, // Number
    location : "Jamshedpur", // String
    email : "amar@yahoo.co.in", // String
    isLoggedIn : false, //boolean
    lastLoginDays : ["Monday","Saturday"] // Array
}
//ways to access elements of Object
//Method 1
console.log(JsUser1.email);
//Method 2
console.log(JsUser1["email"]);
//Method 2 is Suggested because sometimes elements of object are declared as strings, at 
//that situation we are unable to access it using dot operator.
console.log(JsUser1["email","isLoggedIn"]); //amar@yahoo.co.in false
//using Method2 we call multiple elements simuntaneously.

//To modify values in the object
JsUser1.email = "amar@chatgpt.com"
//Object.freeze(JsUser1)

JsUser1.email = "amar@chatgpt.co.in"
//The above syntax will not execute and also it will not give any error
console.log(JsUser1)

//To make symbole inside object we use Square brackets

JsUser1.greeting = function(){
    console.log("Hello Js user")
}

console.log(JsUser1.greeting); //[Function (anonymous)
//Function Execute nhi hua h bas function ka refrence ayya h
console.log(JsUser1.greeting()); // Hello Js user

JsUser1.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`)
}
console.log(JsUser1.greetingTwo()); // Hello Js user, Amar
