const accountId = 144553
let accountEmail = "amarmaurya1040@gmail.com"
var accountPassword ="12345"
accountCity = "Jaipur"
let accountState;
/*If we declare any variable and does not assign any value to it, then its default value is "undefined"*/

// accountId = 2 // assignment in constant is not allowed
accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);
/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity])
console.table([accountId, accountEmail, accountPassword, accountCity,accountState])