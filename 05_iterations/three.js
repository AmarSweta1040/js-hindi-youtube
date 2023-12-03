// for of

//["","",""]
//[{},{},{}]

const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    console.log(num);
}

const greetings = "Hello World"
for (const greet of greetings) {
    if(greet == " "){
        continue;
    }
    console.log(greet)
}



//Maps
//Maps store unique values only
const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")

console.log(map);

for (const key of map) {
    console.log(key);
}

for (const [key, value] of map) {
    console.log(key,':-',value);
}