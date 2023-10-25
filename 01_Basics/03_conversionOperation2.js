/*********** Operations ***********/
let value = 3
let negValue = -value
console.log(negValue);


console.log(2+2) //4
console.log(2-2) //0
console.log(2*2) //4
console.log(2/2) //1
console.log(2%2) //0
console.log(2**3)//8

let str1 = "Hello"
let str2 = " Amar"
let str3 = str1 + str2
console.log(str3) // Hello Amar

console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 2)
console.log(1 + 2 + "2")
/*Javascript में पहले अगर number है तो तो वह पहले number की तरह काम करेगा*/
/*अगर पहले string होगा तो पूरा concatenation हो जाएगा*/

console.log(true)  // output=> true
console.log(+true) // output=> 1
console.log(+"")   // output=> 0

let num1, num2, num3
num1 = num2 = num3 = 2+2
console.table([num1, num2, num3])

let gameCounter = 100
++gameCounter;
console.log(gameCounter);