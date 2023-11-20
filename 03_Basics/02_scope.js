let a = 10
const b = 20
var c = 30

console.log(a);
console.log(b);
console.log(c);

if(true){
    let d = 10 
    const e = 20 
    var f = 30 
}

// console.log(d); // d is not defined, because scope of d is till line no 13
// console.log(e); // e is not defined, because scope of d is till line no 13
//console.log(f);// 30, this is the reason we don't use var keyword anymore because there is a problem of scope with var

//variables in line 10,11,12 have block scope means we can use them within a block of code.
//varible in line 1,2,3 have global scope means we can use them from anywhere throughout the program.


function one(){
    const userName = "Amar"

    function two(){
        const website = "Youtube"
        console.log(userName); // Amar
    }
    //console.log(website) // website is not defined, because scope of website is till line no 29.

    two()

}

one()

//When there is nested functions at that time child functions can access parents varibles
//but parent functions does not able to use child functions.




//++++++++++++++++++ think about it +++++++++++++++++++++++++++
console.log(addOne(5)); // 6

function addOne(num){
    return num +1
}



//-------------other method to do the same------------------
const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5)); // 7



//_____concept of hoisting_______________
//When we initialize a functions by declaring a variable, we call call it before declartion
//When we initilize a function directly we can call a function before declaration.