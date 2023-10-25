let score = 33

console.log(typeof score)  // used as a varible
console.log(typeof (score))// used as a method

let score1 = "33"

console.log(typeof score1)  // used as a varible
console.log(typeof (score1))// used as a method

let valueInNumber = Number(score1)
console.log(typeof valueInNumber)  // used as a varible
console.log(typeof (valueInNumber))// used as a method

let score2 = "33abc"

console.log(typeof score2)  // used as a varible
console.log(typeof (score2))// used as a method

let valueInNumber1 = Number(score2)
console.log(typeof valueInNumber1)
console.log(valueInNumber1) // output => NaN (Not a Number)
/*When we convert Value from String to Number it will be converted but the converted Value is "NaN" means not a number, so while converting from string to number it is required to be more careful*/
/*There is not strict check in Javascript*/
 
let score3 = null
 console.log(typeof score3) //object
 let valueInNumber2 = Number(score3)
 console.log(typeof valueInNumber2) // number
 console.log(valueInNumber2) // output => 0 (Zero)
 /*If we convert null to number its default value is 0 Zero*/

 let score4 = undefined
 console.log(typeof score4) //undefined
 let valueInNumber3 = Number(score4)
 console.log(typeof valueInNumber3) // number
 console.log(valueInNumber3)  // output => NaN
 /*If we convert undefined to number its default value is NaN(Not a Number)*/

 let score5 = true
 let valueInNumber4 = Number(score5)
 console.log(valueInNumber4) // output => 1
 /*When we try to Convert boolean values to number, true = 1 & false = 0*/

 let score6 = ""  // Empty String
 let valueInNumber5 = Number(score6)
 console.log(valueInNumber5)
 /*If we try to convert Empty string to number its default value is 0 Zero*/

 let score7 = "Amar"
 let valueInNumber6 = Number(score7)
 console.log(valueInNumber6)
  /*If we try to convert Non Empty string to number its default value is NaN (Not a Number)*/

  let isLoggedIn = 1
  let booleanIsLoggedIn = Boolean(isLoggedIn)
  console.log(booleanIsLoggedIn)

  let score8 = ""
  let booleanScore8 = Boolean(score8)
  console.log(booleanScore8)

  // "33" => 33
  // "33abc" => NaN
  // true => 1
  // false => 0
  // 1,2,3.... = true(if converted from number to boolean)
  // 0 = false(if converted from number to boolean)
  // if we try to convert empty string to boolean it will give output "false"
  // if we try to convery non empty string to boolean it will give output "true"

  let someNumber = 33
  let stringNumber = String (someNumber)
  console.log(typeof stringNumber) // converted to string
  console.log(stringNumber) // output => 33

  /*It is easy to convert number to string, but while converting string to number special care is needed*/ 