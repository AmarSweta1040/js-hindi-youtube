const coding =["js", "ruby", "java", "python", "cpp"]

const values = coding.forEach((item) => {
    console.log(item);
    return item
})

console.log(values); // indefined 
//For Each loop never return any value



const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNum = myNum.filter((num) => num > 4)
console.log(newNum); // [ 5, 6, 7, 8, 9, 10 ]

const newNum2 = myNum.filter((num) => { return num > 4})
console.log(newNum2); // [ 5, 6, 7, 8, 9, 10 ]

const newNum3=[]
myNum.forEach((numb) => {
    if (numb > 4){
        newNum3.push(numb)
    }
})

console.log(newNum3); // [ 5, 6, 7, 8, 9, 10 ]


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981,
    edition: 2004 }, // Object
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992,   
    edition: 2008 }, // Object
    { title: 'Book Three', genre: 'History', publish: 1999,     
    edition: 2007 }, // Object
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 }, // Object
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 }, // Object
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 }, // Object
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 }, // Object
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 }, // Object
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 }, // Object
];

const userBooks = books.filter( (bk) => bk.genre === 'History')

console.log(userBooks); // Output
/* [
  {
    title: 'Book Three',
    genre: 'History',
    publish: 1999,
    edition: 2007
  },
  {
    title: 'Book Seven',
    genre: 'History',
    publish: 1986,
    edition: 1996
  }
]
 */

const userBooks2=books.filter( (bk) => {return bk.publish >= 2000})

console.log(userBooks2); // Output
/* [
    {
      title: 'Book Five',
      genre: 'Science',
      publish: 2009,
      edition: 2014
    },
    {
      title: 'Book Eight',
      genre: 'Science',
      publish: 2011,
      edition: 2016
    }
  ]
*/
const userBooks3=books.filter( (bk) => {
    return bk.publish >= 2000 && bk.genre === 'History'
})

console.log(userBooks3); // [] because there is no book related to the given condition.