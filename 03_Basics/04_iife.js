// Immediately Invoked Function Expression (IIFE)

//()                   ()
//^Function Definition ^Function Call

(function chai(){ // name IFFE
    console.log(`DB CONNECT`);
})();
(() => { //Unnamed IffE
    console.log(`DB CONNECT2`);
})();
((name) => { // Passing Parameter in IIFE
    console.log(`DB CONNECT2 ${name}`);
})("Amar");