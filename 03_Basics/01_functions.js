console.log("A");
console.log("M");
console.log("A");
console.log("R");

function sayMyName(){ // Function Definition
    console.log("A");
    console.log("M");
    console.log("A");
    console.log("R");
}

sayMyName()//Calling a function


function addTwoNumbers(number1, number2){ // When we define a function at that time we call it parameter
    console.log(number1 + number2);
}

addTwoNumbers(); // NaN
addTwoNumbers(3,5); // 8, when we call a function at that time it is called arguments.
const result = addTwoNumbers(3,5)
console.log("Result:", result);//Result: undefined

function addTwoNumbers1(number1, number2){
    let result1 = number1 + number2;
    return result1;
}
const result1 = addTwoNumbers1(3,5)
console.log("Result:", result1);//Result: 8




function logInUserMessage(userName){
    return `${userName} just logged in`
}

console.log(logInUserMessage("Amar")); // Amar just logged in
console.log(logInUserMessage(""));// just logged in
console.log(logInUserMessage()); // undefined just logged in


function logInUserMessageTwo(userName){
    if(userName === undefined){  // Or we can write if(!userName){}
        console.log("Please enter a username")
        return
    }
    return `${userName} just logged in`
}

console.log(logInUserMessageTwo()); // Please enter a username

//If we want that above situation does not arrive we can give default values

function logInUserMessageThree(userName = "Unknown"){
    if(userName === undefined){  // Or we can write if(!userName){}
        console.log("Please enter a username")
        return
    }
    return `${userName} just logged in`
}

console.log(logInUserMessageThree()); // Unknown just logged in

//^^ In the above condition If condition will never execute






//If there is a situation where N numbers of argument maybe passed....
function calculateCartPrice(num1){
    return num1
}

console.log(calculateCartPrice(10,20,30,40))// 10



//We need to use rest operator (...), it will return us a array of numbers
function calculateCartPrice1(...num1){
    return num1
}

console.log(calculateCartPrice1(10,20,30,40))// [ 10, 20, 30, 40 ]







const user = {
    userName : "Amar",
    price : 999
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.userName} and price is ${anyobject.price}`)
}
handleObject(user); // username is Amar and price is 999

//We can also pass object directly
handleObject({
    userName : "Sweta",
    price : "Infinity"
}) // username is Sweta and price is Infinity






const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));//400  
console.log(returnSecondValue([200, 100, 300, 500]));//100