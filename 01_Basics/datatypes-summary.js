// Primitive Data Type
/*Total 7 Types:
1. String
2. Number
3. Boolean
4. null
5. undefined
6. Symbol
7. BigInt
*/

/*
JavaScript is a dynamically typed language. This means that variable types are determined at runtime, 
and you do not need to explicitly declare the type of a variable before using it. You can 
assign different types of values to a variable during its lifetime.
For example, in JavaScript, you can do the following:

let x = 10; // x is now a number
x = "Hello"; // x is now a string
x = true; // x is now a boolean
On the other hand, statically typed languages require you to declare the variable's type 
explicitly, and the type checking is done at compile-time, before the code is executed.

Languages like Java, C++, and TypeScript are statically typed, and they require you to 
specify the variable type explicitly when declaring them:

int x = 10; // x is a variable of type int
String name = "John"; // name is a variable of type String
JavaScript's dynamic typing allows for more flexibility but can lead to potential runtime 
errors if not handled carefully. Static typing, on the other hand, provides better type safety at 
the cost of some initial verbosity and strictness.
*/
/* Non Primitive Data Type / Reference Data Type
1. Array
2. Objects
3. Functions*/

const heros = ["Shaktiman", "naagraj", "doga"]
//Array
let myObj = {
    name: "Amar",
    age: 22
}
//Object
const myFunction = function(){
    console.log("Hello")
}
//Function


/*Return type of variables in JavaScript
1) Primitive Datatypes
       Number    => number
       String    => string
       Boolean   => boolean
       null      => object
       undefined => undefined
       Symbol    => symbol
       BigInt    => bigint

2) Non-primitive Datatypes
       Arrays     =>  object
       Function   =>  function
       Object     =>  object
*/


/*
Stack (Primitive Data Type), Heap (Non Primitive)
Stack में value की Copy मिलती है,
Heap में value की refrence मिलती है (जो भी change करेंगे Original value में change होगा)
*/

let myYoutubeName = "Infinity Redefined"

let anotherName = myYoutubeName
anotherName = "Jai Ho"

console.log(myYoutubeName) // Infinity Redefined
console.log(anotherName) // Jai Ho

let userOne = {
    email : "user@google.com",
    upi: "user@ybl" 
}

let userTwo = userOne

userTwo.email = "Google@google.com"

console.log(userOne.email) // Google@google.com
console.log(userTwo.email) // Google@google.com