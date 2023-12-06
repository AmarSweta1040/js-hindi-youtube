//reduce() method in JavaScript is used to reduce the array to a single value and executes a provided function for each value of 
//the array (from left to right) and the return value of the function is stored in an accumulator, it does not affect the original array
const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const myTotal = myNum.reduce (function (acc, currval){
    return acc + currval
}, 0)

console.log(myTotal); //55



const myTotal1 = myNum.reduce( (acc, curr) => (acc+curr), 0)

console.log(myTotal1); // 55



// Write to Program to Add amount of all the items present in a cart
const shoppingCart = [
    {
        itemName:"Js",
        price:2999
    },
    {
        itemName:"Pre",
        price:299
    },
    {
        itemName:"Web Dev",
        price:2926
    },
    {
        itemName:"Python",
        price:299
    },
    {
        itemName:"Java",
        price:999
    },
]

const totalPrice = shoppingCart.reduce((current, item) => current + item.price,0)
console.log(totalPrice);