const score = 400 // js predicted that this is a number
console.log(score) // Output: 400

const balance = new Number(100) // In this way we explicitly tell js that balance is a variable which stores value whose datatype is number
console.log(balance)// Output: [Number: 100]

console.log(balance.toString()) // Convert Number to String, but original value not change. So, if we check typeof of balance strill it shows object.
//As we convert Number to String, we can use all the properties / methods of string.
console.log(balance.toFixed(2)); // using this we can show decimal before two digits. Output: 100.00
//toPrecision() method gives priority to number before decimal

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-In'))//It will separate digits using comma in Indian style. Output: 10,00,000



// +++++++++++++++++++Maths++++++++++++++++++++++++++++++++++

console.log(Math)  // Object
console.log(Math.abs(-4)) // 4
console.log(Math.round(4.6)) // 5
console.log(Math.ceil(4.6)) // 5
console.log(Math.floor(4.9)) //4
console.log(Math.sqrt(5)) //2.23606
console.log(Math.max(4,5,8,9,1,5)) //9
console.log(Math.min(49,1,5,5,8,5)) // 1

console.log(Math.random())// It is used to generate random number between 0 - 1

console.log(Math.random()*10)//It is used to generate random number 0 & 1-10 
//After decimal we get so many numbers to avoid this we use round
//We need to understand this very precisely to use.
console.log(Math.round(Math.random()))






