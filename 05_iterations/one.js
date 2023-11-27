// For

for (let index = 0; index <= 10; index++) {
    const element = index;
    if (element == 5){
       // console.log("5 is Best number");
    }
    //console.log(element);
}

for (let i = 0; i < 10 ; i++) {
//    console.log(`Outer loop Value: ${i}`);
    for (let j = 0; j < 10 ; j++) {
//        console.log(`Inner Loop Value: ${i} and Outer Loop Value: ${j}`);
    }
}

let myArray = ["Flash", "Batman", "Supermen"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
   // console.log(element);
} // Flast Batman Superman


// break and continue

for (let index = 0; index < 10; index++) {
    const element = index;
    if(element == 5){
        break;
    }
    console.log(element);
    
} // 1 2 3 4


for (let index = 0; index < 10; index++) {
    const element = index;
    if(element == 5){
        continue;
    }
    console.log(element);
    
} // 1 2 3 4 6 7 8 9