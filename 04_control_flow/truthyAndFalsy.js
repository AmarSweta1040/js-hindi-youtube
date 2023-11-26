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



// false == 0  -> true
// false == '' -> true
// 0 == ''     -> true



//Nullish Coalescing Operator  (??):  null undefined

let val1;
val1 = 5 ?? 10
console.log(val1);  // 5


val1 = null ?? 10
console.log(val1); // 10


val1 = undefined ?? 10
console.log(val1); // 10


val1 = undefined ?? 15 ?? 20 ?? 30 ?? 40
console.log(val1); // 15



// Terniary Operator

// condition ? true : false

const iceTeaPrice = 80
iceTeaPrice >= 80 ? console.log("InBudget") : console.log("OutOfBudget");