const name = "Amar"
const repoCount = 50

//console.log(name + repoCount + " Value") don't use

console.log(`Hello mu name is ${name} and my repo count is ${repoCount}`)

const gameName = new String("Hello-hc")

console.log(gameName[0]) // H
console.log(gameName.length) // 8
console.log(gameName.toUpperCase()) // HELLO-HC
console.log(gameName.charAt(3)) //l
console.log(gameName.indexOf('o')) //4

const newString = new String("HelloWorld")
console.log(newString.substring(0,4))//Hell

const anotherString = newString.slice(-8,4)
console.log(anotherString)

const newStringOne = "    Hello   "
console.log(newStringOne);
console.log(newStringOne.trim());//Used to remove spaces

const url = "https://amar.com/amar%20maurya"
console.log(url.replace('%20','-')) // https://amar.com/amar-maurya
console.log(url.includes("amar")) //true

console.log(gameName.split('-'))