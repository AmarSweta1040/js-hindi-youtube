const marvel_heros = ["thor", "Iron Man", "Spider Man",5]
const dc_heros = ["superman", "Batman", "Flash"]

console.log(marvel_heros); // It has total 3 elements
marvel_heros.push(dc_heros)
//Push Method Change the Original Array
console.log(marvel_heros); // Now, It has total 4 elements 
console.log(dc_heros);
//If Required we can access using Index number
console.log(marvel_heros[4]) // [ 'superman', 'Batman', 'Flash' ]
console.log(marvel_heros[4][0]) //superman


//************Concatenation*********************************
const alphabet1 = ['a','b','c']
const alphabet2 = ['d','e','f']
alphabet1.concat(alphabet2)
//Concate Does not effect the original Array, so we need to save the value after concatenation in new varible
console.log(alphabet1);// [ 'a', 'b', 'c' ]
alphabet3 = alphabet1.concat(alphabet2)
console.log(alphabet3); //[ 'a', 'b', 'c', 'd', 'e', 'f' ]
//But concate operator is used with only two arrays.
//So to concate more than two arrays we use "spread" operator
//spread operator also return new array
const number1 = ["1", "2", "3"]
const number2 = ["4", "5", "6"]
const number3 = [...number1,...number2]
console.log(number3) // [ '1', '2', '3', '4', '5', '6' ]

//If there is a situation that we get array in which there is another array and in that array 
//there is another array.....in this case we use flat operator which take value of depth, for 
//better understanding we are taking depth as Infinity but it is not good practice.
const another_array = [1,2,3,[4,5,6], 7, [8,9,10,[11,12]]]
const real_array = another_array.flat(Infinity)
console.log(real_array); // [ 1,  2, 3, 4,  5, 6,  7, 8, 9, 10, 11, 12 ]
//To check given value is of array type of not we use "isArray" method
console.log(Array.isArray("Amar"))//flase
//To convert other types of data to Array we use "from" method
console.log(Array.from("Amar"))//[ 'A', 'm', 'a', 'r' ]
//If by chance "from" method unable to convert the value it will return empty array []
console.log(Array.from ({name: "Amar"}))// interesting case because it returns empty array

//If we want to convert different values of different varibles to array we use "of" method.
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));//[ 100, 200, 300 ]
