const user = {
    userName : "Amar",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.userName}, welcome to website`)
        //this keyword is used for current context
    }

}

user.welcomeMessage()//Amar, welcome to website
user.userName = "Sam"
user.welcomeMessage()//Sam, welcome to website
console.log(this);//{}

//this keyword is used only in object
//if we try to use this keyword in fuction it will return 'undefined'

const chai = function() {
    let userName = "Amar"
    console.log(this.userName); //undefined
}
chai()

//-----------Making Arrow Function-----------------------

const chai2 = () =>{
    let userName = "Amar"
    console.log(this.userName); //undefined
    console.log(this);//{}
}
chai2()



const addTwo = (num1, num2) => {
    return num1 + num2
}

console.log(addTwo(4,6)); // 10

const addThree = (num1, num2, num3) => num1 + num2 + num3
console.log(addThree(5,4,6)); // 15

const addFour = (num1, num2, num3, num4) => (num1 + num2 + num3 + num4)
console.log(addFour(5,4,6,4)); // 19