// singleton 


// Constructor method to clear Object is
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
