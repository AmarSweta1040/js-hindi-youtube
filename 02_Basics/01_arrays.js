//arrays

const myArray = [0, 1, 2, 3, 4, 5]
const myHeros = ["Shaktiman", "Nagrajan", "IronMan"]
const array2 = new Array(1,2,3,);

console.log(myArray[3]); //3

//Array Methods

console.log(myArray); // [ 0, 1, 2, 3, 4, 5 ]
myArray.push(6)
console.log(myArray); // [ 0, 1, 2, 3, 4, 5, 6 ]
myArray.pop()
console.log(myArray); // [ 0, 1, 2, 3, 4, 5 ]

//When we try to add element at the Beginning, we use unshift() method
myArray.unshift(99)
console.log(myArray);// [ 99, 0, 1, 2, 3, 4, 5 ]

//When we try to remove element at the Beginning, we use shift() method
myArray.shift()
console.log(myArray);// [ 0, 1, 2, 3, 4, 5 ]
//If we want to ask some Questions from JS about the given Array we use includes() method
console.log(myArray.includes(55)) //false
console.log(myArray.includes(0)) // true

/*If we use indexOf() method in Js for the value which is not present in the Array it will return -1*/
console.log(myArray.indexOf(99)) // -1
console.log(myArray.indexOf(5))  //  5

/* By default Array in JS is object, if we want to convert it into string we use join method, it will convert 
array into string and by default deparate all the elements using couma (,) operator, we can also change 
this separation Operator as per our Requirement*/

const newArr = myArray.join()
console.log(newArr); // 0,1,2,3,4,5
console.log(typeof newArr); //string

const newArr1 = myArray.join(" Hello ")
console.log(newArr1); // 0 Hello 1 Hello 2 Hello 3 Hello 4 Hello 5

//slice, splice

console.log("A", myArray); //A [ 0, 1, 2, 3, 4, 5 ]
const myn1 = myArray.slice(1,3) //Does not Effect on Original array, Range Not Included
console.log(myn1);// [ 1, 2 ]
const myn2 = myArray.splice(1,3) //Effect on Original Array, Range Included
/*The splice() method will change the contents of the original array, it removes all the elements of 
original array which are included in new array, it means if we use splice method*/
console.log(myn2);   // [ 1, 2, 3 ]
console.log(myArray);// [ 0, 4, 5 ]

