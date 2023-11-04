const marvel_heros = ["thor", "Iron Man", "Spider Man",5]
const dc_heros = ["superman", "Batman", "Flash"]

console.log(marvel_heros); // It has total 3 elements
marvel_heros.push(dc_heros)
console.log(marvel_heros); // Now, It has total 4 elements 
console.log(dc_heros);
//If Required we can access using Index number
console.log(marvel_heros[4]) // [ 'superman', 'Batman', 'Flash' ]
console.log(marvel_heros[4][0]) //superman


//************Concatenation*********************************
const alphabet1 = ['a','b','c']
const alphabet2 = ['d','e','f']
alphabet1.concat(alphabet2)
console.log(alphabet1);