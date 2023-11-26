//When we asume something that it is completely true then it is called truthy value
//We don't compare anything, if something is provided it means it is truthy and if not provided it means it is falsy
const userEmail = "a@maurya.ai"

if (userEmail){
    console.log("Got User Email");
} else {
    console.log("Don't have user email");
}


//List of Falsy Value
//false, 0, -0, BigInt 0n, "", null, undefined, NaN


//List of Truthy Values
//[], "0", 'false', " ", {}, function(){}




//Checking empty array
//const userEmail = [] // it is a truthy value
//if (userEmail.length === 0){
//    console.log("Array is Empty")
//}


//Checking empty object
//const emptyObj = {}
// if (Object.keys(emptyObj).length === 0){
//    console.log("Object is Empty")
//}

