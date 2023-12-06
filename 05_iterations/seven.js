const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNum = myNum.map((num) => num + 10)
console.log(newNum); // [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ]

const newNum1 = myNum
                .map((num) => num * 10)
                .map((num) => num + 01)
console.log(newNum1); // [ 11, 21, 31, 41,  51, 61, 71, 81, 91, 101 ]

//We can do any level of Chaining.....
//When we do chaining first function value transfere to second and second value transfered to third and
//before transfer all the previous operations are completed.

// filter function is used to check the conditions it returns True and False only
// map function is used to make changes in the values but this will not affect the original values.

