console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 >= 1);
console.log(2 == 1);
console.log(2 != 1);

//Confusing topic started
console.log("2" > 1)
console.log("02" > 1)

console.log(null > 0)
console.log(null == 0)
console.log(null >= 0)
// Sometimes We does not get predictable Output
// The reason is that an equality check (==) and comparisons (>, <, >=, <=) work differently.
//Comparison convert null to a number, treating it as 0. 
//Equality convert null to a number, treating it as NaN.
//That's why null>=0 is true and null>0 is false.
console.log(undefined == 0) // false
console.log(undefined == 0) // false
console.log(undefined == 0) // false


/* === (While comparing the variables, it first checks if the types differ. If they do, it returns false. 
If the types match, then it checks for the value. If the values are same and are not numbers, it returns true. 
Finally, if both the operands are numbers and are not NaN, and they have the same value, 
then it returns true. Otherwise, false.)*/

console.log("2" === 2)