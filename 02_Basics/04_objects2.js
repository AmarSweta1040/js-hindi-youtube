const tinderUser = new Object()
//This is the way in which we can delare a singletome object
//OR Declaring a object using Constructor Method

console.log(tinderUser) // {}

tinderUser.id = "123abc"
tinderUser.name = "Amar"
tinderUser.isLoggedIn = false 

console.log(tinderUser)// { id: '123abc', name: 'Amar', isLoggedIn: false }

//Nesting of Objects
const regularUser = {
    email: "Some@gmail.com",
    fullName: {
        userFullName:{
            fistName:"Amar",
            lastName:"Sweta"
        }
    }
}

console.log(regularUser.fullName) // { userFullName: { fistName: 'Amar', lastName: 'Sweta' } }
console.log(regularUser.fullName.userFullName); // { fistName: 'Amar', lastName: 'Sweta' }
console.log(regularUser.fullName.userFullName.fistName); // Amar

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}

const obj3 = {obj1, obj2} 
console.log(obj3) // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }
//Object ke andar object aarha h


const obj4 = {1:"a", 2:"b"}
const obj5 = {3:"c", 4:"d"}

const obj6 = Object.assign({}, obj1, obj2) 
//                   Target^    ^^^^^^^^^Sources
console.log(obj6) // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

//Other Method to Merge Two objects
const obj7 = {1:"a", 2:"b"}
const obj8 = {3:"c", 4:"d"}

const obj9 = {...obj1, ...obj2} 
console.log(obj9) // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


//Objects Inside Array
const users =[
    {
        id: 1,
        email: "a@gmai.com"
    },
    {
        id: 1,
        email: "a@gmai.com"
    },
    {
        id: 1,
        email: "a@gmai.com"
    }
]

console.log(users[1].email) // a@gmai.com



console.log(tinderUser); //{ id: '123abc', name: 'Amar', isLoggedIn: false }

console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser));//[ '123abc', 'Amar', false ]
console.log(Object.entries(tinderUser));//[ [ 'id', '123abc' ], [ 'name', 'Amar' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLogged')); //false