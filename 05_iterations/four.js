const myObject ={
    js:'JavaScript',
    cpp:'C++',
    rb:"Ruby",
    swift:"Swift by apple"
}

for (const key in myObject) {
    console.log(key);
}

for (const key in myObject) {
    console.log(myObject[key]);
}

for (const key in myObject) {
    console.log(key,":-",myObject[key]);
}

//for-in loop ke andar index value aata h
//for-of loop ke andar direct value aata h

//We use for of loop for Arrays
//We use for in loop for Objects

